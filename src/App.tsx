import * as React from "react"
import {useEffect, useState} from "react"
import {Map, Marker, TileLayer, Popup} from "react-leaflet"
import {coffeePoints} from "./coffeepoints"
import {coffeeIcon} from "./coffeeIcon"

// TODO add map types
const ratings = {
    "-1": "👎",
    "0": "🆗",
    "1": "👍"
}

export const App: React.FC = () => {
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleWindowResize = (): void => setHeight(window.innerHeight)

        window.addEventListener('resize', handleWindowResize)
        return (): void => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return (
        <>
            <Map center={[41.3851, 2.1734]} zoom={13} style={{height: `${height}px`}}>
                <TileLayer
                    url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
                    attribution="<a href='https://wikimediafoundation.org/wiki/Maps_Terms_of_Use'>Wikimedia</a>"
                    minZoom={1}
                    maxZoom={19}
                />
                {
                    coffeePoints.map(point =>
                        <Marker icon={coffeeIcon} key={point.name} position={point.coordinates}>
                            <Popup>
                                <h2>{point.name}</h2>
                            </Popup>
                        </Marker>
                    )
                }
            </Map>
        </>
    )
}
