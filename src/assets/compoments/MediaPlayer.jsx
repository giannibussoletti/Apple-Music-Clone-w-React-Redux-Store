import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Row, Col, Image, Form } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"

import { pauseSongAction, playSongAction } from "../redux/action"
import { useEffect, useRef } from "react"

const MediaPlayer = () => {
  const dispatch = useDispatch()
  const song = useSelector((reduxStore) => reduxStore.music.song)
  const isPlaying = useSelector((reduxStore) => reduxStore.music.isPlaying)
  const audioPlayer = useRef()
  useEffect(() => {
    const audio = audioPlayer.current
    audio.src = song.preview

    if (isPlaying) {
      audio.play().catch((err) => {
        console.log("Errore play:", err)
      })
    } else {
      audio.pause()
    }
  }, [song, isPlaying])

  return (
    <Container
      className="position-sticky bg-secondary-subtle rounded-2"
      style={{ maxWidth: "400px", bottom: "1rem" }}>
      <Row className=" justify-content-between align-items-center p-2">
        <Col xs="auto" className="p-0">
          {isPlaying ? (
            <Image style={{ maxHeight: "56px" }} src={song.album.cover} />
          ) : (
            <FontAwesomeIcon
              size="xl"
              icon="fa-solid fa-music"
              className="p-3 rounded-3 bg-secondary"
            />
          )}
        </Col>
        <Col className=" overflow-scroll">
          <div className="overflow-scroll hiding-scrollbar">
            <p className="m-0" style={{ whiteSpace: "nowrap" }}>
              {isPlaying ? song.title_short : ""}
            </p>
          </div>
          <p style={{ fontSize: ".8rem" }} className=" text-secondary">
            {isPlaying ? song.artist.name : ""}
          </p>
          <Form.Range />
        </Col>
        <Col className="p-0 d-flex justify-content-end gap-2 pe-3">
          {isPlaying ? (
            <FontAwesomeIcon
              size="2xl"
              icon="fa-solid fa-pause"
              onClick={() => {
                dispatch(pauseSongAction())
              }}
            />
          ) : (
            <FontAwesomeIcon
              size="2xl"
              icon="fa-solid fa-play"
              onClick={() => {
                dispatch(playSongAction())
              }}
            />
          )}
          <FontAwesomeIcon size="2xl" icon="fa-solid fa-forward" />
        </Col>
        <audio id="audio" ref={audioPlayer} src={song.preview} />
      </Row>
    </Container>
  )
}
export default MediaPlayer
