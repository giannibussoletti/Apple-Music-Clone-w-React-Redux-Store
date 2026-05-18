import { Col, Row, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NavbarMobile = () => {
  return (
    <Row className="px-4 bg-light-subtle">
      <Col
        className="d-flex justify-content-between align-items-center py-3"
        style={{ color: "rgb(250, 88, 106)" }}>
        <FontAwesomeIcon size="xl" icon="fa-solid fa-grip-lines" />
        <Image style={{ maxWidth: "80px" }} src="./logos/music.svg" />
        <p className="m-0 fw-semibold">Accedi</p>
      </Col>
    </Row>
  )
}

export default NavbarMobile
