import { combineReducers } from "redux"

import locationReducer from "./locationReducer"
import pharmacyReducer from "./pharmacyReducer"

const rootReducer = combineReducers({
    location: locationReducer,
    pharmacies: pharmacyReducer,
})

export default rootReducer
