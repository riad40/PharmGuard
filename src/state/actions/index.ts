import { LocationObject, Pharmacy } from "../../@types"

const saveLocation = (location: LocationObject) => {
    return {
        type: "SET_LOCATION",
        payload: location,
    }
}

const savePharmacies = (pharmacies: Pharmacy[]) => {
    return {
        type: "SAVE_PHARMACIES",
        payload: pharmacies,
    }
}

const searchPharmacies = (search: string) => {
    return {
        type: "SEARCH_PHARMACIES",
        payload: search,
    }
}

export { saveLocation, savePharmacies, searchPharmacies }
