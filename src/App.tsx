import * as React from "react"
import {Map, TileLayer} from "react-leaflet"


export const App: React.FC = () => {
    return (
        <>
            <h1>Barcelona Coffee Map</h1>
            <Map center={[41.3851, 2.1734]} zoom={13} style={{height: "500px"}}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>
        </>
    )
}
