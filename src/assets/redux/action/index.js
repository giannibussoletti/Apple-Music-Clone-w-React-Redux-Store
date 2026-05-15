// ACTION FILE

export const GET_SONGS = "GET_SONGS"
export const HANDLE_LOADING = "HANDLE_LOADING"

export const handleFetchSong = () => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
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
