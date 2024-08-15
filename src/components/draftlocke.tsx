import React, { useEffect, useState } from 'react';
import './draftlocke.css';
import { CollapsiblePokemonButton } from './collapsible-pokemon-button';
import { romanize } from 'src/utils/romanize';
import { useFirestore } from 'src/utils/use-firestore';
import { onSnapshot } from 'firebase/firestore';

export interface DraftPokemon {
    spriteUrl: string;
    isDisabled: boolean;
    generation: number;
    pokedexNumber: string;
    draftedBy: string;
}

export const Draftlocke: React.FC = () => {
    const [pokemonData, setPokemonData] = useState<Map<string, DraftPokemon>>(new Map());
    const [draftees, setDraftees] = useState<string[]>([]);
    const [currentPlayer, setCurrentPlayer] = useState<string>('Unselected');
    const { getPlayersRef, getDraftPokemonRef, updatePokemonDisabled, setPokemonDraftedBy } = useFirestore();
    
    const getGenerationName = (generation: number) => {
        if (!generation) {
            return 'Starters';
        }

        return `Generation ${romanize(generation)}`
    }

    const toggleCrossedOutFirestore = (pokemonName: string) => {
        if (pokemonData.has(pokemonName)) {
            const currentPokeData = pokemonData.get(pokemonName);

            if (currentPokeData) {
                updatePokemonDisabled(pokemonName, !currentPokeData.isDisabled);
            }
        }
    }

    const getIsDisabled = (pokemonName: string) => {
        if (pokemonData.has(pokemonName)) {
            const currentPokeData = pokemonData.get(pokemonName);

            return currentPokeData?.isDisabled;
        }
    }

    const addToTeam = (pokemonName: string) => {
        if (pokemonData.get(pokemonName)?.draftedBy || currentPlayer === 'Unselected') {
            return;
        }

        setPokemonDraftedBy(pokemonName, currentPlayer);
        toggleCrossedOutFirestore(pokemonName);
    }

    const removeFromTeam = (pokemonName: string, draftee: string) => {
        if (draftee === currentPlayer) {
            setPokemonDraftedBy(pokemonName, '');
            toggleCrossedOutFirestore(pokemonName);
        }
    }

    useEffect(() => {
        const unsubscribeFromDraftPokemon = onSnapshot(getDraftPokemonRef(), (snapshot) => {
            const firestorePokemon = new Map<string, DraftPokemon>();

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

        // Cleanup subscriptions on component unmount
        return () => {
            unsubscribeFromDraftPokemon();
            unsubscribeFromPlayers();
        }
    }, []);

    // if (!teamsData) {
    //     return (
    //         <div>Loading...</div>
    //     )
    // }

    const groupedByGeneration = Array.from(pokemonData.entries()).reduce((acc, [pokemonName, { spriteUrl, isDisabled, generation, pokedexNumber }]) => {
        if (!acc[generation]) {
            acc[generation] = [];
        }
        acc[generation].push({ pokemonName, spriteUrl, isDisabled, pokedexNumber });
        return acc;
    }, {} as Record<string, { pokemonName: string; spriteUrl: string; isDisabled: boolean, pokedexNumber: string, }[]>);

      function getPokemonFromPlayer(
        playerName: string
    ): Array<{ pokemonName: string, spriteUrl: string }> {
        const playerTeam: Array<{ pokemonName: string, spriteUrl: string }> = [];
    
        pokemonData.forEach((pokemon, pokemonName) => {
            if (pokemon.draftedBy === playerName) {
                playerTeam.push({ pokemonName, spriteUrl: pokemon.spriteUrl });
            }
        });
    
        return playerTeam;
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
                                                { getIsDisabled(pokemonName) && <img className="circle" src="/images/Draftlocke/circle.png" alt="" /> }
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
                        <div className="pokemon-container">
                            {getPokemonFromPlayer(draftee).map(({ pokemonName, spriteUrl }) => (
                                <div className="name-and-sprite" key={pokemonName}>
                                {spriteUrl ? (
                                    <div 
                                        className="sprite-container"
                                        onClick={() => {
                                            removeFromTeam(pokemonName, draftee);
                                        }}
                                    >
                                        <img className="sprite" src={spriteUrl} alt={pokemonName} />
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