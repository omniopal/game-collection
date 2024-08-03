import React, { useState } from 'react';
import './game-collection-list.css';
import { CollapsibleConsoleButton } from './collapsible-console-button';
import * as gameCollectionDataJson from '../data/game-collection-data.json';
import { Filters } from './filters';
import { GameInfo } from './game-info';
import { getPhysicalGameType } from '../utils/get-physical-game-type';

type GameCollectionListProps = {};

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
    const [radioValue, setRadioValue] = useState('owned-games');
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const gameData: { consoles: Console[] } = gameCollectionDataJson;
    let audio = new Audio("./audio/1up.mp3");

    const handleRadioButtonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue((event.target as HTMLInputElement).value);
    }

    return (
        <div className="background">
            <div className="jacobs-games">
                <img className="jacobs-games-image" src="./images/jacobs-games.png" onClick={() => audio.play()} />
            </div>
            <Filters onChange={handleRadioButtonChange} />
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