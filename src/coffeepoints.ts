export interface CoffeePoint {
    name: string;
    address: string;
    coordinates: [number, number];
}

export const coffeePoints: ReadonlyArray<CoffeePoint> = [
    {
        "name": "Morrow Coffee",
        "address": "Av. Gran Vía de les Corts Catalanes 403",
        "coordinates": [41.377229, 2.151273],
    }
]