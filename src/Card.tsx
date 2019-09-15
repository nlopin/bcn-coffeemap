import * as React from "react"
import {CoffeePoint} from "./coffeepoints"

interface Props {
    point: CoffeePoint;
    distance?: number;
}

export const Card: React.FC<Props> = ({distance, point}: Props) => {
    return <div className="card" key={point.name}>
        <h3>{point.name}</h3>
        <p>{point.address}</p>
        <p>{point.tags.map(tag => <span key={tag}>{tag}</span>)}</p>
        <p>{distance}</p>
    </div>
}