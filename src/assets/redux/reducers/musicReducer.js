import { PLAY_SONG_ALBUM, PLAY_SONG, PAUSE_SONG } from "../action"

const initialState = {
  song: {},
  isPlaying: false,
}

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG_ALBUM:
      return {
        ...state,
        song: action.payload,
        isPlaying: true,
      }

    case PLAY_SONG:
      return {
        ...state,
        isPlaying: true,
      }

    case PAUSE_SONG:
      return {
        ...state,
        isPlaying: false,
      }

    default:
      return state
  }
}

export default musicReducer
