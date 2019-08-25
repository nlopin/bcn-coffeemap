import * as React from "react"
import {Map, TileLayer} from "react-leaflet"


export const App: React.FC = () => {
    return (
        <>
            <h1>Barcelona Coffee Map</h1>
            <Map center={[51.505, 20.33]} zoom={10} style={{height: "500px"}}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>
        </>
    )
}
