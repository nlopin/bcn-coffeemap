export interface CoffeePoint {
    name: string;
    address: string;
    coordinates: [number, number];
    rating: Rating;
}

export type Rating = -1 | 0 | 1;

export const coffeePoints: ReadonlyArray<CoffeePoint> = [
    {
        "name": "Morrow Coffee",
        "address": "Av. Gran Vía de les Corts Catalanes 403",
        "coordinates": [41.377229, 2.151273],
        "rating": 1
    }
]