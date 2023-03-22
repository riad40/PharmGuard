import { Pharmacy } from "../../@types"

const pharmacies: Pharmacy[] = []

type PharmacyAction = {
    type: "SAVE_PHARMACIES"
    payload: Pharmacy[]
}

const pharmacyReducer = (state = pharmacies, action: PharmacyAction) => {
    switch (action.type) {
        case "SAVE_PHARMACIES":
            return action.payload
        default:
            return state
    }
}

export default pharmacyReducer
