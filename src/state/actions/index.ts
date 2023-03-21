import { LocationObject } from "../../@types"

const saveLocation = (location: LocationObject) => {
    return {
        type: "SET_LOCATION",
        payload: location,
    }
}

export { saveLocation }
