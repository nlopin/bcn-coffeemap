import * as React from "react"
import {useEffect, useState} from "react"
import {Map, TileLayer} from "react-leaflet"

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
            </Map>
        </>
    )
}
