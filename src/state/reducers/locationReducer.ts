import { LocationObject } from "../../@types"

type LocationAction = {
    type: "SET_LOCATION"
    payload: LocationObject
}

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
