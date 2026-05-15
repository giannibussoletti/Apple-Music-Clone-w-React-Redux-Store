import { GET_SONGS, HANDLE_LOADING } from "../action"

const initialState = {
  songs: [],
  isLoading: true,
}

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload,
      }

    case HANDLE_LOADING:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}

export default fetchReducer
