import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Row, Col } from "react-bootstrap"

const MediaPlayer = () => {
  return (
    <Container
      className="position-sticky bg-secondary-subtle rounded-2"
      style={{ maxWidth: "400px", bottom: "1rem" }}>
      <Row className=" justify-content-between align-items-center p-2">
        <Col className="ps-0">
          <FontAwesomeIcon
            size="xl"
            icon="fa-solid fa-music"
            className="p-3 rounded-3 bg-secondary"
          />
        </Col>
        <Col></Col>
        <Col className="p-0 d-flex justify-content-end gap-2 pe-3">
          <FontAwesomeIcon size="2xl" icon="fa-solid fa-play" />
          {/* <FontAwesomeIcon size="2xl" icon="fa-solid fa-pause" /> */}
          <FontAwesomeIcon size="2xl" icon="fa-solid fa-forward" />
        </Col>
        <audio src="">
          <source src="" type="" />
        </audio>
      </Row>
    </Container>
  )
}
export default MediaPlayer
