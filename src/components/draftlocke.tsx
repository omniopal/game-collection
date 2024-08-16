import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './draftlocke.css';
import { CollapsiblePokemonButton } from './collapsible-pokemon-button';
import { useFirestore } from 'src/utils/use-firestore';
import { onSnapshot } from 'firebase/firestore';
import clsx from 'clsx';
import { getGenerationName } from 'src/utils/get-generation-name';

export interface DraftPokemon {
    spriteUrl: string;
    isDisabled: boolean;
    generation: number;
    pokedexNumber: string;
    draftedBy: string;
}

type PokemonData = Map<string, DraftPokemon>;

export const Draftlocke: React.FC = () => {
    const [pokemonData, setPokemonData] = useState<PokemonData>(new Map());
    const [draftees, setDraftees] = useState<string[]>([]);
    const [currentPlayer, setCurrentPlayer] = useState<string>('Unselected');
    const [randomizedTeams, setRandomizedTeams] = useState<Map<string, string>>(new Map());
    const [isShinyKeyHeld, setIsShinyKeyHeld] = useState(false);
    const { getPlayersRef, getDraftPokemonRef, updatePokemonDisabled, setPokemonDraftedBy } = useFirestore();
    
    // Shows/Hides the red crossed out circle over a pokemon
    const toggleDisabled = useCallback((pokemonName: string) => {
        const currentPokeData = pokemonData.get(pokemonName);
        if (currentPokeData) {
            updatePokemonDisabled(pokemonName, !currentPokeData.isDisabled);
        }
    }, [pokemonData, updatePokemonDisabled]);

    // Returns the current isDisabled value for a pokemon
    const getIsDisabled = (pokemonName: string) => {
        if (pokemonData.has(pokemonName)) {
            const currentPokeData = pokemonData.get(pokemonName);

            return currentPokeData?.isDisabled;
        }
    }

    // Adds a pokemon to the currentPlayer's team
    const addToTeam = useCallback((pokemonName: string) => {
        const pokemon = pokemonData.get(pokemonName);
        if (pokemon?.draftedBy || currentPlayer === 'Unselected') {
            return;
        }

        setPokemonDraftedBy(pokemonName, currentPlayer);
        toggleDisabled(pokemonName);
    }, [pokemonData, currentPlayer, setPokemonDraftedBy, toggleDisabled]);

    // Removes a pokemon from the currentPlayer's team
    const removeFromTeam = useCallback((pokemonName: string, draftee: string) => {
        if (draftee === currentPlayer) {
            setPokemonDraftedBy(pokemonName, '');
            toggleDisabled(pokemonName);
        }
    }, [currentPlayer, setPokemonDraftedBy, toggleDisabled]);

    useEffect(() => {
        const unsubscribeFromDraftPokemon = onSnapshot(getDraftPokemonRef(), (snapshot) => {
            const firestorePokemon: PokemonData = new Map();

            snapshot.forEach((doc) => {
                const data = doc.data();
                firestorePokemon.set(doc.id, {
                    spriteUrl: data.spriteUrl,
                    isDisabled: data.isDisabled,
                    generation: data.generation,
                    pokedexNumber: data.pokedexNumber,
                    draftedBy: data.draftedBy,
                });
            });

            setPokemonData(firestorePokemon);
        });

        const unsubscribeFromPlayers = onSnapshot(getPlayersRef(), (snapshot) => {
            const players: string[] = [];

            snapshot.forEach((doc) => {
                const data = doc.data();
                const playerData = data.players;
                playerData.forEach((player: string) => {
                    players.push(player);
                });
            });

            setDraftees(players);
        });

        // Show shiny teams easter egg
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 's') {
              setIsShinyKeyHeld(true);
            }
          };
      
          const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === 's') {
              setIsShinyKeyHeld(false);
            }
          };
      
          window.addEventListener('keydown', handleKeyDown);
          window.addEventListener('keyup', handleKeyUp);
      

        // Cleanup subscriptions on component unmount
        return () => {
            unsubscribeFromDraftPokemon();
            unsubscribeFromPlayers();
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        }
    }, []);

    // Group pokemon by generation
    const groupedByGeneration = useMemo(() => {
        return Array.from(pokemonData.entries()).reduce((acc, [pokemonName, { spriteUrl, isDisabled, generation, pokedexNumber }]) => {
            if (!acc[generation]) {
                acc[generation] = [];
            }

            acc[generation].push({ pokemonName, spriteUrl, isDisabled, pokedexNumber });
            return acc;
        }, {} as Record<string, { pokemonName: string; spriteUrl: string; isDisabled: boolean, pokedexNumber: string, }[]>);
    }, [pokemonData]);

    // Get all of the pokemon that have been drafted by the given player
    const getPokemonFromPlayer = useCallback((playerName: string): Array<{ pokemonName: string, spriteUrl: string }> => {
        return Array.from(pokemonData.entries())
            .filter(([, pokemon]) => pokemon.draftedBy === playerName)
            .map(([pokemonName, { spriteUrl }]) => ({ pokemonName, spriteUrl }));
    }, [pokemonData]);

    // Randomly assign the drafted teams to other players
    const randomizeTeams = () => {
        const teamAssignments: Map<string, string> = new Map();
        let unpickedDraftees = [...draftees];

        draftees.forEach((draftee) => {
            let possibleAssignments = unpickedDraftees.filter(name => name.toLowerCase() !== draftee.toLowerCase());

            if (possibleAssignments.length === 0) {
                possibleAssignments = [unpickedDraftees[0]];
            }

            let assignedTo = possibleAssignments[Math.floor(Math.random() * possibleAssignments.length)];
            teamAssignments.set(draftee, assignedTo);
            unpickedDraftees = unpickedDraftees.filter(name => name !== assignedTo);
        });

        setRandomizedTeams(teamAssignments);
    }

    // Given the normal spriteUrl, returns the URL for the shiny sprite
    const getShinySpriteUrl = (spriteUrl: string) => {
        return spriteUrl.replace('/other/showdown/', '/other/showdown/shiny/');
    }
    
    return (
        <div className="container">
            <div className="draft">
                <h1>Draftable Pokemon</h1>
                <div className="draft-pokemon-container">
                    
                    {Object.entries(groupedByGeneration)
                        .sort((a, b) => Number(a) - Number(b))
                        .map(([generation, pokemons]) => (
                        <CollapsiblePokemonButton generationName={getGenerationName(Number(generation))}>
                            {pokemons
                                .sort((a, b) => Number(a.pokedexNumber) - Number(b.pokedexNumber))
                                .map(({ pokemonName, spriteUrl }) => (
                                    <div className="name-and-sprite" key={pokemonName}>
                                        {spriteUrl ? (
                                            <div 
                                                className="sprite-container"
                                                onClick={() => { 
                                                addToTeam(pokemonName);
                                            }}>
                                                <img className={clsx("circle", getIsDisabled(pokemonName) && "show-circle")} src="/images/Draftlocke/circle.png" alt="" />
                                                <img className="sprite" src={spriteUrl} alt={pokemonName} />
                                            </div>
                                        ) : (
                                            <div>No sprite available</div>
                                        )}
                                        <h3>{pokemonName}</h3>
                                    </div>
                            ))}
                        </CollapsiblePokemonButton>
                    ))}
                </div>
            </div>
            <div className="teams">
                <button className="random-buttons" onClick={() => randomizeTeams()}>
                    Randomize Teams
                </button>
                <button className="random-buttons" onClick={() => setRandomizedTeams(new Map())}>
                    Reset Assignments
                </button>
                <h1>Current Draftee: <div className="current-draftee">{currentPlayer}</div></h1>
                {draftees.map((draftee) => (
                    <div className="team-container" key={draftee}>
                        <h2 
                            onClick={() => {
                                const updatedDraftee = currentPlayer === draftee ? 'Unselected' : draftee;
                                setCurrentPlayer(updatedDraftee);
                            }}
                        >
                            {draftee}'s Drafts:
                        </h2>
                        {(randomizedTeams.size > 0) && 
                            <h4>Assigned to: {randomizedTeams.get(draftee)}</h4>
                        }
                        <div className="pokemon-container">
                            {getPokemonFromPlayer(draftee).map(({ pokemonName, spriteUrl }) => (
                                <div className="name-and-sprite" key={pokemonName}>
                                {spriteUrl ? (
                                    <div 
                                        id="sprite"
                                        className="sprite-container"
                                        onClick={() => {
                                            removeFromTeam(pokemonName, draftee);
                                        }}
                                    >
                                        <img className="sprite" src={isShinyKeyHeld ? getShinySpriteUrl(spriteUrl) : spriteUrl} alt={pokemonName} />
                                    </div>
                                ) : (
                                    <div>No sprite available</div>
                                )}
                                <p>{pokemonName}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}