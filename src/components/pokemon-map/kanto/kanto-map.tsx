import { Circle, ImageOverlay, LayerGroup, MapContainer } from "react-leaflet";
import { MapProps } from "../pokemon-map";
import { kantoTowns } from "./towns";
import L from "leaflet";

export const KantoMap: React.FC<MapProps> = (props) => {
    const { handleTownClick, height, bounds, guesses, center, zoom } = props;

    return (
        <MapContainer
            style={{ height: height, width: "100vw" }}
            crs={L.CRS.Simple}
            center={center}
            minZoom={-1.8}
            zoom={zoom}
            maxBounds={bounds}
        >
            <ImageOverlay url="/images/kanto map.webp" bounds={bounds} />
            <LayerGroup>
                {kantoTowns.map((town) => (
                    <Circle 
                        key={town.name}
                        center={town.coords}
                        pathOptions={guesses.includes(town.name) ? { fillColor: "red", color: "red" } : { fillColor: "blue", color: "blue" }}
                        radius={35}
                        eventHandlers={{
                            click: () => handleTownClick(town.name),
                            mouseover: (e) => e.target.setStyle({ fillColor: "red", color: "red" }),
                            mouseout: (e) => {
                                if (!guesses.includes(town.name)) {
                                    e.target.setStyle({ fillColor: "blue", color: "blue" });
                                }
                            },
                        }}
                    />
                ))}
            </LayerGroup>
        </MapContainer>
    )
}