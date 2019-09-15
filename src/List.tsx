import * as React from "react"

import {CoffeePoint} from "./coffeepoints"
import {Card} from "./Card"
import { getDistanceInMeters } from "./services/distance"

interface Props {
    closestTo?: [number, number];
    points: ReadonlyArray<CoffeePoint>;
}

export const List: React.FC<Props> = ({points, closestTo}: Props) => {
    const compareDistance = (left: CoffeePoint, right: CoffeePoint) => {
        if (closestTo) {
            return getDistanceInMeters(closestTo, left.coordinates) - getDistanceInMeters(closestTo, right.coordinates)
        } else {
            return -1
        }
    }
    return (<>
        <h2>List of coffee shops</h2>
        <div>
            {[...points].sort(compareDistance).map(point => (<Card key={point.name} point={point} distance={closestTo && getDistanceInMeters(closestTo, point.coordinates)}/>))}
        </div>
    </>)
}