import { Col, Image, Row } from "react-bootstrap"

const CardNovità = () => {
  return (
    <Row className="mt-5">
      <Col>
        <h1 className="fw-bold">Novità</h1>
        <hr />
        <p
          className="text-uppercase fw-semibold text-secondary-subtle mb-0"
          style={{ fontSize: "0.85rem" }}>
          nuova stazione radio
        </p>
        <h4>Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill</h4>
        <Image className="rounded-4" style={{ maxHeight: "250px" }} src="./images/1a.png" />
      </Col>
    </Row>
  )
}

export default CardNovità
