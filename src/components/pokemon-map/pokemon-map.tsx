'use client'

import React, { useState } from 'react';
import './pokemon-map.css';
import { Circle, ImageOverlay, LayerGroup, MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L, { LatLngBounds } from 'leaflet';

const PokemonMap = () => {

    const [circleColor, setCircleColor] = useState("blue");

    const bounds: LatLngBounds = new LatLngBounds(
        [0, 0], // Southwest
        [287, 383]  // Northeast
    );

    const fillBlueOptions = { fillColor: 'blue' }

    return (
        <MapContainer bounds={bounds} style={{ height: "500px", width: "100%" }} crs={L.CRS.Simple}>
            <ImageOverlay url="/images/kanto map.png" bounds={bounds} />
            <LayerGroup>
            <Circle
                    center={[72, 88]}
                    pathOptions={{ fillColor: circleColor, color: circleColor }}
                    radius={10}
                    eventHandlers={{
                        click: () => {
                            console.log('Pallet Town');
                        },
                        mouseover: (e) => e.target.setStyle({ fillColor: "red", color: "red" }),
                        mouseout: (e) => e.target.setStyle({ fillColor: "blue", color: "blue" }),
                    }}
                />
                <Circle
                    center={[120, 88]}
                    pathOptions={{ fillColor: circleColor, color: circleColor }}
                    radius={10}
                    eventHandlers={{
                        click: () => {
                            console.log('Viridian City');
                        },
                        mouseover: (e) => e.target.setStyle({ fillColor: "red", color: "red" }),
                        mouseout: (e) => e.target.setStyle({ fillColor: "blue", color: "blue" }),
                    }}
                />
                <Circle
                    center={[151, 200]}
                    pathOptions={{ fillColor: circleColor, color: circleColor }}
                    radius={10}
                    eventHandlers={{
                        click: () => {
                            console.log('Celadon City');
                        },
                        mouseover: (e) => e.target.setStyle({ fillColor: "red", color: "red" }),
                        mouseout: (e) => e.target.setStyle({ fillColor: "blue", color: "blue" }),
                    }}
                />
            </LayerGroup>
        </MapContainer>
    )
}

export default PokemonMap;