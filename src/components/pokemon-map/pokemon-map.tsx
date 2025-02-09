'use client'

import React, { useRef, useState } from 'react';
import './pokemon-map.css';
import { Circle, ImageOverlay, LayerGroup, MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L, { LatLng, LatLngBounds } from 'leaflet';
import { alpha, styled, Switch, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';

const StyledSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: 'hsl(138, 80%, 80%)',
      '&:hover': {
        backgroundColor: alpha('hsl(138, 80%, 80%)', theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: 'hsl(138, 80%, 80%)',
    },
    '& .MuiSwitch-track': {
      backgroundColor: 'hsl(138, 80%, 80%)',
    },
    '& .MuiSwitch-switchBase': {
      color: 'hsl(138, 80%, 80%)',
      '&:hover': {
        backgroundColor: alpha('hsl(138, 80%, 80%)', theme.palette.action.hoverOpacity),
      },
      
    },
    
  }));

const PokemonMap = () => {

    const [lastClickedTown, setLastClickedTown] = useState<string>('');
    const [result, setResult] = useState<'Correct!' | 'Wrong' | ''>('');
    const [score, setScore] = useState<number>(0);
    const [showTownNames, setShowTownNames] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTheme, setCurrentTheme] = useState<string | null>(null);
    const [correctTowns, setCorrectTowns] = useState<string[]>([]);

    const bounds: LatLngBounds = new LatLngBounds(
        [0, 0], // Southwest
        [1600, 4405]  // Northeast
    );

    const towns = [
        {
            name: "Celadon City",
            coords: new LatLng(835, 2165),
        },
        {
            name: "Saffron City",
            coords: new LatLng(835, 2365),
        },
        {
            name: "Lavender Town",
            coords: new LatLng(835, 2632),
        },
        {
            name: "Cerulean City",
            coords: new LatLng(1036, 2364),
        },
        {
            name: "Vermilion City",
            coords: new LatLng(635, 2364),
        },
        {
            name: "Fuchsia City",
            coords: new LatLng(435, 2232),
        },
        {
            name: "Cinnabar Island",
            coords: new LatLng(300, 1697),
        },
        {
            name: "Pallet Town",
            coords: new LatLng(503, 1697),
        },
        {
            name: "Viridian City",
            coords: new LatLng(703, 1697),
        },
        {
            name: "Pewter City",
            coords: new LatLng(970, 1697),
        },
        {
            name: "Indigo Plateau",
            coords: new LatLng(1035, 1561),
        },
    ];

    const themes = [
        {
            name: "Viridian City/Pewter City/Saffron City Theme",
            file: "/audio/viridian.mp3",
            towns: ["Viridian City", "Pewter City", "Saffron City"],
        },
        {
            name: "Celadon Theme",
            file: "/audio/celadon.mp3",
            towns: ["Celadon City"],
        },
        {
            name: "Lavender Town Theme",
            file: "/audio/lavender.mp3",
            towns: ["Lavender Town"],
        },
        {
            name: "Cerulean City/Fucshia City Theme",
            file: "/audio/cerulean.mp3",
            towns: ["Cerulean City", "Fucshia City"],
        },
        {
            name: "Vermilion City Theme",
            file: "/audio/vermilion.mp3",
            towns: ["Vermilion City"],
        },
        {
            name: "Cinnabar Island Theme",
            file: "/audio/cinnabar.mp3",
            towns: ["Cinnabar Island"],
        },
        {
            name: "Pallet Town",
            file: "/audio/pallet.mp3",
            towns: ["Pallet Town"],
        },
        {
            name: "Indigo Plateau",
            file: "/audio/indigo.mp3",
            towns: ["Indigo Plateau"],
        }

    ];

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
        } else {
            console.log("Wrong!");
            setResult('Wrong');
        }
    };

    const theme = useTheme();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down(700));
    const center = isSmallBreakpoint ? new LatLng(800, 2102) : new LatLng(725, 2202);
    const zoom = isSmallBreakpoint ? -2 : -1;
    const height = isSmallBreakpoint ? "400px" : "500px";

    return (
        <>
            <div className="header">
                <h2>Region: Kanto</h2>
                <div className="score-container">
                    <p>Score: </p>
                    <p className="score">{score}</p>
                </div>
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
                    <label>Show town names after click</label>
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
                    {showTownNames && <div>You just clicked on: {lastClickedTown}</div>}
                    {result && <div className={clsx(result === 'Correct!' ? "correct" : "wrong")}>{result}</div>}
                </div>
            </div>
        </>
    )
}

export default PokemonMap;