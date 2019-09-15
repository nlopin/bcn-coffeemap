import * as React from "react"

import {CoffeePoint} from "./coffeepoints"
import {Card} from "./Card"

interface Props {
    points: ReadonlyArray<CoffeePoint>;
}

export const List: React.FC<Props> = ({points}: Props) => {
    return (<>
        <h2>List of coffee shops</h2>
        <div>
            {points.map(point => (<Card key={point.name} point={point}/>))}
        </div>
    </>)
}