import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Form, Image, Row, Button } from "react-bootstrap"
import { pauseSongAction, playPromiseAction, playSongAction, calcTimeAction } from "../redux/action"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useRef, useState } from "react"

const NavBar = () => {
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
    <>
      <Row className="px-4 bg-light-subtle">
        <Col>
          <FontAwesomeIcon icon="fa-solid fa-shuffle" />
          <FontAwesomeIcon icon="fa-solid fa-backward" />
          {isPlaying ? (
            <FontAwesomeIcon
              size="xl"
              icon="fa-solid fa-pause"
              onClick={() => {
                dispatch(pauseSongAction())
                audio.pause()
              }}
            />
          ) : (
            <FontAwesomeIcon
              size="xl"
              icon="fa-solid fa-play"
              onClick={() => {
                dispatch(playSongAction())
                audio.play()
              }}
            />
          )}
          <FontAwesomeIcon icon="fa-solid fa-forward" />
          <FontAwesomeIcon icon="fa-solid fa-repeat" />
        </Col>
        <Col className=" overflow-scroll">
          {song ? (
            <>
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
            </>
          ) : (
            <Image src="./logos/apple.svg" />
          )}
        </Col>
        <Col>
          <FontAwesomeIcon icon="fa-solid fa-volume" />
          <Form.Range />
        </Col>
        <Col>
          <Button className="fw-bold border-0" style={{ backgroundColor: "rgb(250, 88, 106)" }}>
            <FontAwesomeIcon icon="fa-solid fa-user" /> Accedi
          </Button>
        </Col>
        <audio ref={audioPlayer} src={song?.preview} preload="metadata" />
      </Row>
    </>
  )
}

export default NavBar
