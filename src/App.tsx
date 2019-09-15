import * as React from "react"
import {useEffect, useState} from "react"
import {Map, Marker, TileLayer, Popup} from "react-leaflet"

import {CoffeePoint, coffeePoints} from "./coffeepoints"
import {coffeeIcon} from "./coffeeIcon"
import {useWindowHeight} from "./hooks/useWindowHeight"
import {List} from "./List"
import {Card} from "./Card"
import './styles.css'

export const App: React.FC = () => {
    const height = useWindowHeight()
    const [selected, setSelected] = useState<CoffeePoint | null>(null)
    const cardHeight = selected ? 8.5 : 6

    return (
        <>
            <Map center={[41.3851, 2.1734]} zoom={13} style={{
                height: `calc(${height}px - ${cardHeight}rem)`,
                transition: "height 300ms"
            }}>
                <TileLayer
                    url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
                    attribution="<a href='https://wikimediafoundation.org/wiki/Maps_Terms_of_Use'>Wikimedia</a>"
                    minZoom={1}
                    maxZoom={19}
                />
                {
                    coffeePoints.map(point =>
                        <Marker icon={coffeeIcon} key={point.name} position={point.coordinates} onClick={(): void => {
                            setSelected(point)
                        }}>
                            <Popup onClose={(): void => {
                                setSelected(null)
                            }}>
                                <h2>{point.name}</h2>
                            </Popup>
                        </Marker>
                    )
                }
            </Map>
            <div className="list">
                {!selected && <List points={coffeePoints}/>}
                {selected && <Card point={selected}/>}
            </div>
        </>
    )
}
