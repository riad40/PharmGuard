const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
) => {
    const R = 6371e3 // metres
    const lat1ToRadians = (lat1 * Math.PI) / 180
    const lat2ToRadians = (lat2 * Math.PI) / 180
    const latDifference = ((lat2 - lat1) * Math.PI) / 180
    const lonDifference = ((lon2 - lon1) * Math.PI) / 180

    const a =
        Math.sin(latDifference / 2) * Math.sin(latDifference / 2) +
        Math.cos(lat1ToRadians) *
            Math.cos(lat2ToRadians) *
            Math.sin(lonDifference / 2) *
            Math.sin(lonDifference / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    const d = R * c
    return d
}

export default calculateDistance
