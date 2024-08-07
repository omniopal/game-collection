import React, { useState } from 'react';
import './game-collection-list.css';
import { CollapsibleConsoleButton } from './collapsible-console-button';
import * as gameCollectionDataJson from '../data/game-collection-data.json';
import { Filters } from './filters';
import { GameInfo } from './game-info';
import { getPhysicalGameType } from '../utils/get-physical-game-type';
import Image from 'next/image';

type GameCollectionListProps = {};

export type ListFilter = 'all-games' | 'owned-games' | 'unowned-games';

interface Game {
    title: string;
    boxArt: string;
    hasGame: boolean;
    hasCase: boolean;
    hasManual: boolean;
    hasPlayed: boolean;
    image?: string;
    releaseDate: string;
}

interface Console {
    name: string;
    image: string;
    releaseDate: string;
    games: Game[];
}

export const GameCollectionList: React.FC<GameCollectionListProps> = () => {
    const [radioValue, setRadioValue] = useState<ListFilter>('all-games');
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const gameData: { consoles: Console[] } = gameCollectionDataJson;

    const onFilterChange = (filter: ListFilter) => {
        setRadioValue(filter);
    }

    return (
        <div className="background">
            <div className="jacobs-games">
                <Image className="jacobs-games-image" src={'/images/jacobs-games.png'} alt="TODO" sizes="100vw" style={{ width: '100%', height: 'auto' }} height={0} width={0} />
            </div>
            <div className="filters-container">
                <Filters onFilterChange={onFilterChange} />
            </div>
            <nav className="game-collection-list">
                {gameData.consoles.map((console, index) => {
                    const physicalGameType = getPhysicalGameType(console.name);

                    return (
                        <div key={index}>
                            <CollapsibleConsoleButton
                                consoleIndex={index}
                                consoleName={console.name}
                                consoleImage={console.image}
                                consoleReleaseDate={console.releaseDate}
                                top={index === 0}
                                bottom={index === gameData.consoles.length - 1}
                                setOpenIndex={() => setOpenIndex(openIndex === index ? null : index)}
                                openIndex={openIndex}
                            >
                                {console.games.map((game, gameIndex) => (
                                    ((radioValue === "owned-games" && game.hasGame) || (radioValue === "unowned-games" && !game.hasGame) || radioValue === "all-games") &&
                                        <div key={gameIndex}>
                                            <GameInfo 
                                                text={game.title}
                                                boxArt={game.boxArt}
                                                personalCopyImage={game.image}
                                                gameReleaseDate={game.releaseDate}
                                                physicalGameType={physicalGameType}
                                                chipInfo={{
                                                    hasGame: game.hasGame,
                                                    hasBox: game.hasCase,
                                                    hasManual: game.hasManual,
                                                    hasPlayed: game.hasPlayed,
                                                }}
                                            />
                                        </div>
                                    ))
                                }
                            </CollapsibleConsoleButton>
                        </div>
                    )
                })}
            </nav>
        </div>
    );
}