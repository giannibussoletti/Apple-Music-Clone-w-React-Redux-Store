import { PLAY_SONG } from "../action"

const initialState = {
  song: {},
  isPlaying: false,
}

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        song: action.payload,
        isPlaying: true,
      }

    default:
      return state
  }
}

export default musicReducer
