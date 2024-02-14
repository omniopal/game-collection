import React, { useState } from 'react';
import './game-collection-list.css';
import { CollapsibleButton } from './collapsible-button';
import * as gameCollectionDataJson from '../data/game-collection-data.json';
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography, useMediaQuery, useTheme } from '@mui/material';

export type GameCollectionListProps = {};

interface Game {
    title: string;
    boxArt: string;
    hasGame: boolean;
    hasCase: boolean;
    hasManual: boolean;
    image?: string;
    releaseDate: string;
    rating: string;
}

interface Console {
    name: string;
    image: string;
    releaseDate: string;
    games: Game[];
}

export const GameCollectionList: React.FC<GameCollectionListProps> = () => {
    const [radioValue, setRadioValue] = useState('my-games');
    const theme = useTheme();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));
    const gameData: { consoles: Console[] } = gameCollectionDataJson;

    const handleRadioButtonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue((event.target as HTMLInputElement).value);
    }

    return (
        <div className="background">
            <div className="jacobs-games">
                <img className="jacobs-games-image" src="./images/jacobs-games.png" />
            </div>
            <div className="form-control">
                <FormControl>
                    <RadioGroup className="radio-group" defaultValue="my-games" onChange={handleRadioButtonChange} row={!isSmallBreakpoint}>
                        <FormControlLabel
                            className="form-control-label"
                            value="my-games"
                            control={<Radio sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }}/>}
                            label={<Typography sx={{ fontWeight: 'bold', fontSize: isSmallBreakpoint ? '18px' : '20px'}} className="radio-button-label">Show games I own</Typography>}/>
                        <FormControlLabel
                            className="form-control-label"
                            value="all-games"
                            control={<Radio sx={{ color: 'black', '&.Mui-checked': { color: 'black' } }}/>}
                            label={<Typography sx={{ fontWeight: 'bold', fontSize: isSmallBreakpoint ? '18px' : '20px' }} className="radio-button-label">Show all Mario games</Typography>}/>
                    </RadioGroup>
                </FormControl>
            </div>
            <nav className="game-collection-list">
                {gameData.consoles.map((console, index) => (
                    <div key={index}>
                        <CollapsibleButton text={console.name} buttonImage={console.image} consoleReleaseDate={console.releaseDate}>
                            {console.games.map((game, gameIndex) => (
                                ((radioValue === "my-games" && game.hasGame) || radioValue === "all-games") &&
                                    <div key={gameIndex}>
                                        <CollapsibleButton 
                                            text={game.title}
                                            buttonImage={game.boxArt}
                                            chipInfo={{ hasGame: game.hasGame, hasBox: game.hasCase, hasManual: game.hasManual }}
                                            modalImage={game.image}
                                            gameReleaseDate={game.releaseDate}
                                            rating={game.rating}
                                            additionalIndent />
                                    </div>
                            ))}
                        </CollapsibleButton>
                    </div>
                ))}
            </nav>
        </div>
    );
}


{/* <div key={gameIndex}>
<CollapsibleButton 
    text={game.title}
    buttonImage={game.boxArt}
    chipInfo={{ hasGame: game.hasGame, hasBox: game.hasCase, hasManual: game.hasManual }}
    modalImage={game.image}
    gameReleaseDate={game.releaseDate}
    rating={game.rating}
    additionalIndent />
</div> */}
