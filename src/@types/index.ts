import rootReducer from "../state/reducers"

export type LocationObject = {
    coords: Coordinates
    mocked: boolean
    provider: string
    timestamp: number
}

type Coordinates = {
    accuracy: number
    altitude: number
    altitudeAccuracy: number
    heading: number
    latitude: number
    longitude: number
    speed: number
}

export type rootState = ReturnType<typeof rootReducer>

export type Pharmacy = {
    id: number
    name: string
    address: string
    longitude: number
    latitude: number
    distance: number
    images: string[]
    openingHours: string
    closingHours: string
    phone: string
    email: string
    services: string[]
    onGuard: boolean
    onGuardDays: [Date, Date] | null
    reviews: Review[]
}

export type Review = {
    id: number
    pharmacyId: number
    username: string
    rating: number
    comment: string
    date: string
}
