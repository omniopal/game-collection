import React, { useEffect, useState } from 'react';
import './draftlocke.css';
import * as draftlockeJson from '../data/draftlocke-teams.json';
import { CollapsiblePokemonButton } from './collapsible-pokemon-button';
import { romanize } from 'src/utils/romanize';

type Team = {
    playerName: string;
    pokemon: string[];
}

interface FirstEvolutions {
    generation: number;
    firstEvolutionPokemon: number[];
}

interface DraftPokemon {
    spriteUrl: string;
    isDisabled: boolean;
    generation: string;
    pokedexNumber: string;
}

export const Draftlocke: React.FC = () => {
    const [draftPokemonData, setDraftPokemonData] = useState<Map<string, DraftPokemon>>(new Map());
    const [teamsData, setTeamsData] = useState<Map<string, Map<string, string>>>(new Map());
    const teamsJson: Team[] = draftlockeJson.teams;
    const firstEvolutions: FirstEvolutions[] = draftlockeJson.firstEvolutions;
    const [currentPlayer, setCurrentPlayer] = useState<string>('Jacob');

    const getGenerationName = (generation: number) => {
        if (!generation) {
            return 'Starters';
        }

        return `Generation ${romanize(generation)}`
    }

    const toggleCrossedOut = (pokemonName: string) => {
        // show/hide circle
        const updatedDraftPokemonData = new Map(draftPokemonData);

        if (updatedDraftPokemonData.has(pokemonName)) {
            const currentPokeData = updatedDraftPokemonData.get(pokemonName);

            if (currentPokeData) {
                const newIsDisabled = !currentPokeData.isDisabled;
                updatedDraftPokemonData.set(pokemonName, { ...currentPokeData, isDisabled: newIsDisabled })
                setDraftPokemonData(updatedDraftPokemonData);
            }
        }
    }

    const addToTeam = (pokemonName: string) => {
        // add pokemon to team
        const updatedTeamsData = new Map(teamsData);

        if (updatedTeamsData.has(currentPlayer)) {
            const currentPlayersPokemon = updatedTeamsData.get(currentPlayer);

            if (currentPlayersPokemon) {
                const pokeData = draftPokemonData.get(pokemonName)
                const spriteUrl = pokeData?.spriteUrl;
                const isDisabled = pokeData?.isDisabled;

                if (spriteUrl && !isDisabled) {
                    currentPlayersPokemon.set(pokemonName, spriteUrl);
                    updatedTeamsData.set(currentPlayer, currentPlayersPokemon);
                    setTeamsData(updatedTeamsData);
                    toggleCrossedOut(pokemonName);
                }
            }
        }
    }

    const removeFromTeam = (pokemonName: string) => {
        // remove pokemon from team
        const updatedTeamsData = new Map(teamsData);

        if (updatedTeamsData.has(currentPlayer)) {
            const currentPlayersPokemon = updatedTeamsData.get(currentPlayer);

            if (currentPlayersPokemon?.has(pokemonName)) {
                currentPlayersPokemon.delete(pokemonName);
                updatedTeamsData.set(currentPlayer, currentPlayersPokemon);
                setTeamsData(updatedTeamsData);
                toggleCrossedOut(pokemonName);
            }
        }
    }

    useEffect(() => {
        const fetchPokeData = async () => {
            const teamsMap = new Map();

            const fetchPromises = teamsJson.map(async (team) => {
                const pokemonMap = new Map();

                const pokePromises = team.pokemon.map(async (pokemon) => {
                    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
                    const result = await res.json();
                    const pokemonName = result.name;
                    const spriteUrl = result.sprites?.other?.showdown?.front_default;

                    pokemonMap.set(pokemonName, spriteUrl);
                });

                await Promise.all(pokePromises);
                teamsMap.set(team.playerName, pokemonMap);
            });

            await Promise.all(fetchPromises);
            setTeamsData(teamsMap);
        }

        const fetchDraftPokeData = async () => {
            const draftData = new Map();

            const fetchPromises = firstEvolutions.map(async (stuff) => {
                const pokePromises = stuff.firstEvolutionPokemon.map(async (pokemon) => {
                    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
                    const result = await res.json();
                    const pokemonName = result.name;
                    const spriteUrl = result.sprites?.other?.showdown?.front_default;
                    const pokedexNumber = result.id;

                    draftData.set(pokemonName, { spriteUrl, isDisabled: false, generation: stuff.generation, pokedexNumber });
                });

                await Promise.all(pokePromises);
            });

            await Promise.all(fetchPromises);
            setDraftPokemonData(draftData);
        }

        fetchPokeData();
        fetchDraftPokeData();
    }, []);

    if (!teamsData) {
        return (
            <div>Loading...</div>
        )
    }

    const groupedByGeneration = Array.from(draftPokemonData.entries()).reduce((acc, [pokemonName, { spriteUrl, isDisabled, generation, pokedexNumber }]) => {
        if (!acc[generation]) {
            acc[generation] = [];
        }
        acc[generation].push({ pokemonName, spriteUrl, isDisabled, pokedexNumber });
        return acc;
    }, {} as Record<string, { pokemonName: string; spriteUrl: string; isDisabled: boolean, pokedexNumber: string, }[]>);

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
                                .map(({ pokemonName, spriteUrl, isDisabled }) => (
                                    <div className="name-and-sprite" key={pokemonName}>
                                        {spriteUrl ? (
                                            <div 
                                                className="sprite-container"
                                                onClick={() => { 
                                                addToTeam(pokemonName);
                                            }}>
                                                { isDisabled && <img className="circle" src="/images/Draftlocke/circle.png" alt="" /> }
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
                {Array.from(teamsData.entries()).map(([playerName, pokemon]) => (
                    <div className="team-container" key={playerName}>
                        <h2 
                            onClick={() => {
                                setCurrentPlayer(playerName);
                            }}
                        >
                            {playerName}'s Drafts:
                        </h2>
                        <div className="pokemon-container">
                            {Array.from(pokemon.entries()).map(([pokemonName, spriteUrl]) => (
                                <div className="name-and-sprite" key={pokemonName}>
                                    {spriteUrl ? (
                                        <div 
                                            className="sprite-container"
                                            onClick={() => {
                                                removeFromTeam(pokemonName);
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