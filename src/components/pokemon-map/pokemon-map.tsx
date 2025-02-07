'use client'

import React, { useRef, useState } from 'react';
import './pokemon-map.css';
import { Circle, ImageOverlay, LayerGroup, MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L, { LatLng, LatLngBounds } from 'leaflet';

const PokemonMap = () => {

    const [currentTown, setCurrentTown] = useState<string | null>(null);
    const [lastClickedTown, setLastClickedTown] = useState<string>('');
    const [result, setResult] = useState<'Correct!' | 'Wrong' | ''>('');
    const [showTownNames, setShowTownNames] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const bounds: LatLngBounds = new LatLngBounds(
        [0, 0], // Southwest
        [287, 383]  // Northeast
    );

    const towns = [
        {
            name: "Pallet Town",
            file: "/audio/pallet.mp3",
            coords: new LatLng(72, 88),
        },
        {
            name: "Viridian City",
            file: "/audio/viridian.mp3",
            coords: new LatLng(120, 88),
        },
        {
            name: "Celadon City",
            file: "/audio/celadon.mp3",
            coords: new LatLng(151, 200),
        },
        {
            name: "Vermilion City",
            file: "/audio/vermilion.mp3",
            coords: new LatLng(104, 248),
        },
        // {
        //     name: "Pewter City",
        //     file: "/audio/viridian.mp3",
        //     coords: new LatLng(184, 88),
        // },
        
    ];

    const playRandomSound = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        const randomTown = towns[Math.floor(Math.random() * towns.length)];

        if (randomTown.name === currentTown) {
            playRandomSound();
            return;
        }

        const newAudio = new Audio(randomTown.file);
        newAudio.volume = 0.05;
        newAudio.play();

        audioRef.current = newAudio;
        setCurrentTown(randomTown.name);
    };

    const handleTownClick = (townName: string) => {
        if (!currentTown) return;

        console.log(townName);

        if (townName === currentTown) {
            console.log("Correct!");
            setResult('Correct!');
        } else {
            console.log("Wrong!");
            setResult('Wrong');
        }

        setLastClickedTown(townName);
    };

    return (
        <>
            <h3>Region: Kanto</h3>
            <MapContainer bounds={bounds} style={{ height: "500px", width: "100%" }} crs={L.CRS.Simple}>
                <ImageOverlay url="/images/kanto map.png" bounds={bounds} />
                <LayerGroup>
                    {towns.map((town) => (
                        <Circle 
                            key={town.name}
                            center={town.coords}
                            pathOptions={{ fillColor: "blue", color: "blue" }}
                            radius={10}
                            eventHandlers={{
                                click: () => handleTownClick(town.name),
                                mouseover: (e) => e.target.setStyle({ fillColor: "red", color: "red" }),
                                mouseout: (e) => e.target.setStyle({ fillColor: "blue", color: "blue" }),
                            }}
                        />
                    ))}
                </LayerGroup>
            </MapContainer>
            <p>Play a random theme and then guess what city/town it belongs to!</p>
            <p>(There are only 4 cities/towns right now)</p>
            <button onClick={playRandomSound} className="p-2 bg-blue-500 text-white rounded mt-4">
                Play Random Theme
            </button>
            <button onClick={() => audioRef.current?.pause()} className="p-2 bg-blue-500 text-white rounded mt-4">
                Stop music
            </button>
            <input type="checkbox" checked={showTownNames} onChange={() => setShowTownNames(!showTownNames)} />
            <label>Show town names after click</label>
            {showTownNames && <div>You just clicked on: {lastClickedTown}</div>}
            {result && <div>{result}</div>}
        </>
    )
}

export default PokemonMap;