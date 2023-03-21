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
