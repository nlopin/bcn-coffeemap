import * as React from "react"
import {CoffeePoint} from "./coffeepoints"

interface Props {
    point: CoffeePoint;
}

export const Card: React.FC<Props> = ({point}: Props) => {
    return <div className="card" key={point.name}>
        <h3>{point.name}</h3>
        <p>{point.address}</p>
    </div>
}