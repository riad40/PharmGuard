import { LocationObject } from "../../@types"
import { saveLocation } from "../actions"

type LocationAction = ReturnType<typeof saveLocation>

const initialState: LocationObject = {} as LocationObject

const locationReducer = (state = initialState, action: LocationAction) => {
    switch (action.type) {
        case "SET_LOCATION":
            return action.payload
        default:
            return state
    }
}

export default locationReducer
