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
  const [volume, setVolume] = useState(0.5)

  const volumeSet = (target) => Number((target / 100).toString().slice(0, 4))

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
      <Row
        className="bg-dark align-items-center justify-content-between py-1 bg-dark-subtle"
        style={{ height: "60px" }}>
        <Col className="d-flex justify-content-center align-items-center gap-2">
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
        <Col className="bg-light-subtle rounded-1 h-75">
          <Row className="h-100">
            {song?.album?.cover ? (
              <>
                <Col xs="auto" className="p-0 h-100">
                  <Image src={song.album.cover} className="h-100" />
                </Col>
                <Col className="overflow-scroll text-center position-relative overflow-y-hidden form-range-p">
                  <div className="overflow-scroll hiding-scrollbar mx-auto">
                    <p className="m-0 small" style={{ whiteSpace: "nowrap", fontSize: ".8rem" }}>
                      {song.title_short}
                    </p>
                  </div>
                  <p style={{ fontSize: ".6rem" }} className=" text-secondary m-0">
                    {song.artist.name}
                  </p>

                  <p
                    className="m-0 position-absolute"
                    style={{ fontSize: ".7rem", bottom: ".3rem", right: ".3rem" }}>
                    {songTime}/{songTimeTotal}
                  </p>
                  <Form.Range
                    min={0}
                    style={{ bottom: "-.7rem" }}
                    className="m-0 p-0 w-100 start-0 position-absolute"
                    max={audio?.duration || 0}
                    value={valueRange}
                    onChange={(e) => (audioPlayer.current.currentTime = e.target.valueAsNumber)}
                  />
                </Col>
              </>
            ) : (
              <Col className="d-flex align-items-center justify-content-center">
                <Image style={{ maxHeight: "30px" }} src="./logos/apple.svg" />
              </Col>
            )}
          </Row>
        </Col>
        <Col className="d-flex justify-content-center align-items-center gap-2">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <FontAwesomeIcon icon="fa-solid fa-volume" />
            <Form.Range
              onChange={(e) => {
                audioPlayer.current.volume = volumeSet(e.target.valueAsNumber)
                setVolume(volumeSet(e.target.valueAsNumber))
              }}
            />
            {/* value={volume}  */}
          </div>

          <Button
            className="fw-bold border-0 ms-auto"
            style={{ backgroundColor: "rgb(250, 88, 106)" }}>
            <span style={{ whiteSpace: "nowrap" }}>
              <FontAwesomeIcon icon="fa-solid fa-user" /> Accedi
            </span>
          </Button>
        </Col>
        <audio ref={audioPlayer} src={song?.preview} preload="metadata" />
      </Row>
    </>
  )
}

export default NavBar
