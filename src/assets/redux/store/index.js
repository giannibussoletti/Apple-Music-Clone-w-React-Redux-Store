import { combineReducers, configureStore } from "@reduxjs/toolkit"
import fetchReducer from "../reducers/fetchReducer"
import iconReducer from "../reducers/iconReducer"
import sectionsReducer from "../reducers/sectionsReducer"
const store = configureStore({
  reducer: combineReducers({
    fetch: fetchReducer,
    icon: iconReducer,
    sections: sectionsReducer,
  }),
})

export default store
