import { combineReducers, configureStore } from "@reduxjs/toolkit"
import fetchReducer from "../reducers/fetchReducer"
import iconReducer from "../reducers/iconReducer"
import sectionsReducer from "../reducers/sectionsReducer"
import musicReducer from "../reducers/musicReducer"
const store = configureStore({
  reducer: combineReducers({
    fetch: fetchReducer,
    icon: iconReducer,
    sections: sectionsReducer,
    music: musicReducer,
  }),
})

export default store
