'use client'

import React, { useEffect, useRef, useState } from 'react';
import './daily-pokemon-map.css';
import { LatLng, LatLngBounds } from 'leaflet';
import { Link, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import { regionThemes, Theme } from './region-themes';
import { Region } from './region-selector';
import { KantoMap } from './kanto/kanto-map';
import { JohtoMap } from './johto/johto-map';
import { StyledSwitch } from './StyledSwitch';
import seedrandom from 'seedrandom';
import { getRegionFromTown } from './get-region-from-town';
import { DailyDoneDialog } from './daily-done-dialog';

export type MapProps = {
    handleTownClick: (townName: string) => void;
    height: string;
    bounds: LatLngBounds;
    guesses: string[];
    center: LatLng,
    zoom: number,
};

const DailyPokemonMap = () => {
    const [lastClickedTown, setLastClickedTown] = useState<string>('');
    const [result, setResult] = useState<'Correct!' | 'Wrong' | ''>('');
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTheme, setCurrentTheme] = useState<string | null>(null);
    const [correctTowns, setCorrectTowns] = useState<string[]>([]);
    const [region, setRegion] = useState<Region>('Kanto');
    const [guesses, setGuesses] = useState<number[]>([]);
    const [currentRoundGuesses, setCurrentRoundGuesses] = useState<string[]>([]);
    const [shouldPlayOGTheme, setShouldPlayOGTheme] = useState(false);
    const [dailyThemes, setDailyThemes] = useState<Theme[]>([]);
    const [ogDailyThemes, setOgDailyThemes] = useState<(Theme | undefined)[]>([]);
    const index = localStorage.getItem('themeIndex') ?? '1';
    const start = Number.parseInt(index);
    const [dailyThemeIndex, setDailyThemeIndex] = useState<number>(start - 1);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const theme = useTheme();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down(700));
    const center = isSmallBreakpoint ? new LatLng(800, 2102) : new LatLng(725, 2202);
    const zoom = isSmallBreakpoint ? -2 : -1;
    const height = isSmallBreakpoint ? "360px" : "500px";

    const bounds: LatLngBounds = new LatLngBounds(
        [0, 0], // Southwest
        [1600, 4405]  // Northeast
    );

    useEffect(() => {
        const index = localStorage.getItem('themeIndex');
        if (index) {
            const numIndex = Number.parseInt(index);
            console.log('0');
            const townName = dailyThemes[numIndex - 1]?.towns[0];
            console.log(townName);
            const region = getRegionFromTown(townName);
            setRegion(region);
        } else if (dailyThemes[0]?.towns) {
            console.log('1');
            const townName = dailyThemes[0].towns[0];
            const region = getRegionFromTown(townName);
            setRegion(region);
        }

        playTheme();
    }, [dailyThemeIndex]);

    const playTheme = () => {
        if (!regionThemes[region]) return;

        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        if (!shouldPlayOGTheme && dailyThemeIndex < dailyThemes.length && dailyThemes.length > 0) {
            console.log(`index: ${dailyThemeIndex}`);
            const theme = dailyThemes[dailyThemeIndex];

            const newAudio = new Audio(theme.file);
            newAudio.volume = 0.05;
            newAudio.play();

            audioRef.current = newAudio;
            setCurrentTheme(theme.name);
            console.log('2');
            setCorrectTowns(theme.towns);
        }

        if (shouldPlayOGTheme && dailyThemeIndex < ogDailyThemes.length && ogDailyThemes.length > 0) {
            console.log(`index: ${dailyThemeIndex}`);
            const theme = ogDailyThemes[dailyThemeIndex];

            const newAudio = new Audio(theme?.file);
            newAudio.volume = 0.05;
            newAudio.play();

            audioRef.current = newAudio;
            if (theme) {
                setCurrentTheme(theme.name);
                setCorrectTowns(theme.towns);
            }
            console.log('2');
        }
    };

    const handleTownClick = (townName: string) => {
        setLastClickedTown(townName);
        if (!currentTheme) return;

        console.log(townName);

        // Correct guess
        if (correctTowns.includes(townName)) {
            setResult('Correct!');
            
            const updatedGuesses = [...guesses, currentRoundGuesses.length + 1];
            setGuesses(updatedGuesses);

            setCurrentRoundGuesses([]);
            audioRef.current?.pause();

            console.log('dailyThemeIndex: ' + dailyThemeIndex);
            console.log(`other: ${dailyThemes.length - 1}`);
            if (dailyThemeIndex === dailyThemes.length - 1) {
                localStorage.setItem('guesses', updatedGuesses.toString());
                setIsDialogOpen(true);
            } else {
                const index = localStorage.getItem('themeIndex');
                if (index) {
                    const numIndex = Number.parseInt(index);
                    localStorage.setItem('themeIndex', `${numIndex + 1}`);
                }

                setDailyThemeIndex(dailyThemeIndex + 1);
            }
            
        // Incorrect guess
        } else {
            if (!currentRoundGuesses.includes(townName)) {
                const updatedCurrentRoundGuesses = [...currentRoundGuesses, townName];
                setCurrentRoundGuesses(updatedCurrentRoundGuesses);
            }

            setResult('Wrong');
        }
    };

    const onThemeVersionToggle = () => {
        setShouldPlayOGTheme(!shouldPlayOGTheme);
        
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        const themes = shouldPlayOGTheme ? regionThemes[region].theme : regionThemes[region].ogTheme;
        themes?.forEach((theme) => {
            console.log('4');
            if (theme.towns.includes(correctTowns[0])) {
                const newAudio = new Audio(theme.file);
                newAudio.volume = 0.05;
                newAudio.play();
                audioRef.current = newAudio;
                return;
            }
        })
    }

    const getDailyThemes = () => {
        const today = new Date().toISOString().split('T')[0];
        const rng = seedrandom(today);
        const allThemes = Object.values(regionThemes).flatMap(region => region.theme);
        const shuffledThemes = allThemes.sort(() => rng() - 0.5);
        
        return shuffledThemes.slice(0, 5);
    };

    const getOgDailyThemes = () => {
        const today = new Date().toISOString().split('T')[0];
        const rng = seedrandom(today);
        const allThemes = Object.values(regionThemes).flatMap(region => region.ogTheme);
        const shuffledThemes = allThemes.sort(() => rng() - 0.5);
        
        return shuffledThemes.slice(0, 5);
    };

    useEffect(() => {
        const localDate = localStorage.getItem('date');
        const today = new Date().toISOString().split('T')[0];
        const themeIndex = localStorage.getItem('themeIndex');

        // Initialize local date (for first time players & after clearing application storage)
        if (!localDate) {
            localStorage.setItem('date', today);
        }

        // Always pop dialog when user has already completed today's puzzle
        if (localDate === today && themeIndex === '5') {
            setIsDialogOpen(true);
        }

        // Reset on new day
        if (localDate != today) {
            localStorage.setItem('date', today);
            localStorage.setItem('themeIndex', '1');
            localStorage.removeItem('guesses');
        }

        const dailyThemes = getDailyThemes();
        const ogDailyThemes = getOgDailyThemes();
        console.log(dailyThemes);
        setDailyThemes(dailyThemes);
        setOgDailyThemes(ogDailyThemes);

        const index = localStorage.getItem('themeIndex');
        if (index) {
            const numIndex = Number.parseInt(index);
            console.log('5');
            const townName = dailyThemes[numIndex - 1]?.towns[0];
            console.log(townName);
            const region = getRegionFromTown(townName);
            setRegion(region);
        } else {
            console.log('6');
            localStorage.setItem('themeIndex', '1');
            const townName = dailyThemes[0].towns[0];
            const region = getRegionFromTown(townName);
            setRegion(region);
        }
    }, []);

    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <Link sx={{ marginBlockStart: '8px', marginInlineStart: '8px' }} className="logo-container" href="/pokemon">
                <img className="logo" src="/images/logo3.png" alt="PokeMelody logo" />
            </Link>
            <div className="header">
                <div className="region">
                    <h2>Region: {region}</h2>
                </div>
                <div className="score-container">
                    <p className="score-label">Round: </p>
                    <p className="score">{localStorage.getItem('themeIndex')} / {dailyThemes.length}</p>
                </div>
            </div>
            {region === 'Kanto' &&
                <KantoMap
                    handleTownClick={handleTownClick}
                    height={height}
                    bounds={bounds}
                    guesses={currentRoundGuesses}
                    center={center}
                    zoom={zoom}
                />
            }
            {region === 'Johto' &&
                <JohtoMap
                    handleTownClick={handleTownClick}
                    height={height}
                    bounds={bounds}
                    guesses={currentRoundGuesses}
                    center={center}
                    zoom={zoom}
                />
            }
            {region === 'Hoenn' &&
                <>
                    <h1 className="construction">Under construction</h1>
                    <h3 className="construction">Come back soon :)</h3>
                </>
            }
            {region === 'Sinnoh' &&
                <>
                    <h1 className="construction">Under construction</h1>
                    <h3 className="construction">Come back soon :)</h3>
                </>
            }
            {region === 'Unova' &&
                <>
                <h1 className="construction">Under construction</h1>
                <h3 className="construction">Come back soon :)</h3>
                </>
            }
            <div className="stuff">
                <p>Date: {today}</p>
                <p>Play a random theme and then click on which location it belongs to!</p>
                <div className="buttons">
                    <button className="button" onClick={playTheme}>
                        Play Theme
                    </button>
                    <button className="button" onClick={() => audioRef.current?.pause()}>
                        Stop music
                    </button>
                    <button className="button" onClick={() => {
                        localStorage.setItem('themeIndex', '1');
                        setDailyThemeIndex(0);
                        setGuesses([]); 
                        setIsDialogOpen(true);
                    }}>
                        Reset
                    </button>
                </div>
                {regionThemes[region]?.ogTheme &&
                    <div className="theme-version-toggle">
                        <div className="play-original-theme">Play original themes</div>
                        <StyledSwitch
                            onChange={onThemeVersionToggle}
                        />
                    </div>
                }
                <div className="results">
                    <div className="town-name-display">
                        <p>Last town selected: </p>
                        <p className="town-name">{lastClickedTown || 'awaiting selection...'}</p>
                    </div>
                    {result && <div className={clsx(result === 'Correct!' ? "correct" : "wrong")}>{result}</div>}
                </div>
            </div>
            <DailyDoneDialog isOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
        </>
    )
}

export default DailyPokemonMap;