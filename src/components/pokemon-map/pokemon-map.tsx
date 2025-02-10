'use client'

import React, { useEffect, useRef, useState } from 'react';
import './pokemon-map.css';
import { Circle, ImageOverlay, LayerGroup, MapContainer } from 'react-leaflet';
import L, { LatLng, LatLngBounds } from 'leaflet';
import { useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import { themes } from './themes';
import { towns } from './towns';
import { StyledSwitch } from './StyledSwitch';
import { RegionFilter } from './filter';

const PokemonMap = () => {

    const [lastClickedTown, setLastClickedTown] = useState<string>('');
    const [result, setResult] = useState<'Correct!' | 'Wrong' | ''>('');
    const [score, setScore] = useState<number>(0);
    const [showTownNames, setShowTownNames] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTheme, setCurrentTheme] = useState<string | null>(null);
    const [correctTowns, setCorrectTowns] = useState<string[]>([]);
    const [time, setTime] = useState(0); // Time in milliseconds
    const [isRunning, setIsRunning] = useState(false);
    const [incorrectGuesses, setIncorrectGuesses] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [filterValue, setFilterValue] = useState<RegionFilter>('Kanto');


    const bounds: LatLngBounds = new LatLngBounds(
        [0, 0], // Southwest
        [1600, 4405]  // Northeast
    );

    const playRandomSound = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        const randomTheme = themes[Math.floor(Math.random() * themes.length)];

        if (randomTheme.name === currentTheme) {
            playRandomSound();
            return;
        }

        const newAudio = new Audio(randomTheme.file);
        newAudio.volume = 0.05;
        newAudio.play();

        audioRef.current = newAudio;
        setCurrentTheme(randomTheme.name);
        setCorrectTowns(randomTheme.towns);
        setIncorrectGuesses(0);
        // startTimer();
    };

    const handleTownClick = (townName: string) => {
        setLastClickedTown(townName);
        if (!currentTheme) return;

        console.log(townName);

        if (correctTowns.includes(townName)) {

            console.log("Correct!");
            setResult('Correct!');
            setScore(score + 1);
            audioRef.current?.pause();
            playRandomSound();
            // stopTimer();
            // startTimer();
        } else {
            console.log("Wrong!");
            setResult('Wrong');
        }
    };

    const theme = useTheme();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down(700));
    const center = isSmallBreakpoint ? new LatLng(800, 2102) : new LatLng(725, 2202);
    const zoom = isSmallBreakpoint ? -2 : -1;
    const height = isSmallBreakpoint ? "360px" : "500px";

    // Format time as MM:SS.t
    const formatTime = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const tenths = Math.floor((ms % 1000) / 100);

        return `${minutes}:${seconds.toString().padStart(2, "0")}.${tenths}`;
    };

    const startTimer = () => {
        setTime(0);
        setIsRunning(true);
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        timerRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 100); 
        }, 100);
    };

    const stopTimer = () => {
        setIsRunning(false);
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
    };

    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    const onFilterChange = (filter: RegionFilter) => {
        setFilterValue(filter);
    }

    return (
        <>
            <div className="header">
                <h2>Region: {filterValue}</h2>
                <div className="score-container">
                    <p className="score-label">Score: </p>
                    <p className="score">{score}</p>
                </div>
                <RegionFilter onFilterChange={onFilterChange} />
            </div>
            <MapContainer style={{ height: height, width: "100vw" }} crs={L.CRS.Simple} center={center} minZoom={-2} zoom={zoom}>
                <ImageOverlay url="/images/new kanto map4.webp" bounds={bounds} />
                <LayerGroup>
                    {towns.map((town) => (
                        <Circle 
                            key={town.name}
                            center={town.coords}
                            pathOptions={{ fillColor: "blue", color: "blue" }}
                            radius={35}
                            eventHandlers={{
                                click: () => handleTownClick(town.name),
                                mouseover: (e) => e.target.setStyle({ fillColor: "red", color: "red" }),
                                mouseout: (e) => e.target.setStyle({ fillColor: "blue", color: "blue" }),
                            }}
                        />
                    ))}
                </LayerGroup>
            </MapContainer>
            <div className="stuff">
                <p>Play a random theme and then click on which location it belongs to!</p>
                <div>
                    <StyledSwitch checked={showTownNames} onChange={() => setShowTownNames(!showTownNames)}/>
                    <label>Show town names after selection</label>
                </div>
                <div className="buttons">
                    <button className="button" onClick={playRandomSound}>
                        Play Random Theme
                    </button>
                    <button className="button" onClick={() => audioRef.current?.pause()}>
                        Stop music
                    </button>
                </div>
                <div className="results">
                    {showTownNames && 
                        <div className="town-name-display">
                            <p>Last town selected: </p>
                            <p className="town-name">{lastClickedTown}</p>
                        </div>
                    }
                    {result && <div className={clsx(result === 'Correct!' ? "correct" : "wrong")}>{result}</div>}
                </div>
                <div>Time: {formatTime(time)}</div>
                <div className="timer-controls">
                    <button className="button" onClick={startTimer}>Start New Round</button>
                    <button className="button" onClick={stopTimer}>Stop Timer</button>
                </div>
            </div>
        </>
    )
}

export default PokemonMap;