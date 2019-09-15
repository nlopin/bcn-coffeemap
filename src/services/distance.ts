const degreesToRadians = (degrees: number): number => {
    return degrees * Math.PI / 180
}

export const getDistanceInMeters = (coord1: [number, number], coord2: [number, number]): number => {
    const earthRadiusKm = 6371

    const dLat = degreesToRadians(coord1[0] - coord2[0])
    const dLon = degreesToRadians(coord1[1] - coord2[1])

    const lat1 = degreesToRadians(coord1[0])
    const lat2 = degreesToRadians(coord2[0])

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return Math.round(earthRadiusKm * c * 1000)
}