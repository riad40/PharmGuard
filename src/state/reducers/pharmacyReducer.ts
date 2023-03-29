import { Pharmacy } from "../../@types"
import { savePharmacies, searchPharmacies } from "../actions"

const pharmacies: Pharmacy[] = []

type PharmacyAction = ReturnType<
    typeof savePharmacies | typeof searchPharmacies
>

const pharmacyReducer = (state = pharmacies, action: PharmacyAction) => {
    switch (action.type) {
        case "SAVE_PHARMACIES":
            return action.payload

        case "SEARCH_PHARMACIES":
            return state.filter((pharmacy) =>
                pharmacy.name
                    .toLowerCase()
                    .includes(action.payload.toLowerCase())
            )

        default:
            return state
    }
}

export default pharmacyReducer
