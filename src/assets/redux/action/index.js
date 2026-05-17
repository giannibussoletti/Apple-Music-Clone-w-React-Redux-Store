export const GET_SONGS = "GET_SONGS"
export const HANDLE_LOADING = "HANDLE_LOADING"
export const PLAY_SONG_ALBUM = "PLAY_SONG_ALBUM"
export const PLAY_SONG = "PLAY_SONG"
export const PAUSE_SONG = "PAUSE_SONG"

export const pauseSongAction = () => {
  return {
    type: PAUSE_SONG,
  }
}

export const playSongAction = () => {
  return {
    type: PLAY_SONG,
  }
}

export const playSongAlbumAction = (albumSong) => {
  return {
    type: PLAY_SONG_ALBUM,
    payload: albumSong,
  }
}

export const handleFetchSong = (search) => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + (search || "queen"))
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("errore nel recupero")
        }
      })
      .then((data) => {
        dispatch({
          type: GET_SONGS,
          payload: data,
        })
        dispatch({
          type: HANDLE_LOADING,
          payload: false,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const playPromiseAction = (audio, song) => {
  audio.src = song
  audio
    .play()
    // eslint-disable-next-line no-unused-vars
    .then((_) => {})
    .catch((err) => {
      console.log("Errore play:", err)
    })
}

// Calcolo minuti e secondi
export const calcTimeAction = (audio) => {
  const minutes = Math.floor(audio / 60)
  const seconds = Math.floor(audio % 60)
  const currSeconds = seconds < 10 ? "0" + seconds : seconds
  const currMin = seconds < 10 ? "0" + minutes : minutes
  return currMin + ":" + currSeconds
}
