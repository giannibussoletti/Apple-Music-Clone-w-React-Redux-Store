import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Row, Col, Image, Form } from "react-bootstrap"

import { useSelector, useDispatch } from "react-redux"
import { useEffect, useRef, useState } from "react"

import { pauseSongAction, playPromiseAction, playSongAction, calcTimeAction } from "../redux/action"

const MediaPlayer = () => {
  const dispatch = useDispatch()

  const song = useSelector((reduxStore) => reduxStore.music.song)
  const isPlaying = useSelector((reduxStore) => reduxStore.music.isPlaying) || false
  const audioPlayer = useRef(null)

  const [audio, setAudio] = useState(null)
  const [songTime, setSongTime] = useState("00:00")
  const [valueRange, setValueRange] = useState(0)
  const [songTimeTotal, setSongTimeTotal] = useState("00:00")

  useEffect(() => {
    setAudio(audioPlayer.current)
    if (isPlaying) {
      playPromiseAction(audio, song.preview)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [song])

  useEffect(() => {
    if (audio) {
      const updateTime = () => {
        setSongTime(calcTimeAction(audio.currentTime))
        setValueRange(audio.currentTime)
      }
      audio.addEventListener("timeupdate", updateTime)

      return () => audio.removeEventListener("timeupdate", updateTime)
    }
  }, [audio, isPlaying])

  useEffect(() => {
    if (audio) {
      const getTotalTime = () => {
        setSongTimeTotal(calcTimeAction(audio.duration))
      }
      audio.addEventListener("loadedmetadata", getTotalTime)

      return () => audio.removeEventListener("loadedmetadata", getTotalTime)
    }
  }, [audio, isPlaying])

  return (
    <Container
      className="position-sticky bg-secondary-subtle rounded-2"
      style={{ maxWidth: "400px", bottom: "1rem" }}>
      <Row className=" justify-content-between align-items-center p-2">
        <Col xs="auto" className="p-0">
          {song?.album?.cover ? (
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
              {song?.title_short ?? ""}
            </p>
          </div>
          <p style={{ fontSize: ".8rem" }} className=" text-secondary">
            {song?.artist?.name ?? ""}
          </p>
          <Form.Range
            min={0}
            max={audio?.duration || 0}
            value={valueRange}
            onChange={(e) => (audioPlayer.current.currentTime = e.target.valueAsNumber)}
          />
          <p>
            {songTime}/{songTimeTotal}
          </p>
        </Col>
        <Col xs={3} className="p-0 d-flex justify-content-end gap-2 pe-3">
          {isPlaying ? (
            <FontAwesomeIcon
              size="2xl"
              icon="fa-solid fa-pause"
              onClick={() => {
                dispatch(pauseSongAction())
                audio.pause()
              }}
            />
          ) : (
            <FontAwesomeIcon
              size="2xl"
              icon="fa-solid fa-play"
              onClick={() => {
                dispatch(playSongAction())
                audio.play()
              }}
            />
          )}
          <FontAwesomeIcon size="2xl" icon="fa-solid fa-forward" />
        </Col>
        <audio ref={audioPlayer} src={song?.preview} preload="metadata" />
      </Row>
    </Container>
  )
}
export default MediaPlayer
