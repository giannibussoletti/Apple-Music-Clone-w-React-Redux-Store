import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Image, InputGroup, Form, Row } from "react-bootstrap"

const Sidebar = () => {
  return (
    <Row className="px-4 fle">
      <Row>
        <Image className="py-3" style={{ maxWidth: "120px" }} src="logos/music.svg" />
        <InputGroup className="mb-3">
          <InputGroup.Text className="bg-transparent">
            <FontAwesomeIcon
              icon="fa-solid fa-magnifying-glass"
              style={{ color: "rgb(250, 88, 106)" }}
            />
          </InputGroup.Text>
          <Form.Control placeholder="Cerca" />
        </InputGroup>
      </Row>
      <Row className="flex-column gap-2 p-0">
        <Col className="py-2">
          <FontAwesomeIcon
            icon="fa-regular fa-house"
            size="xl"
            style={{ color: "rgb(250, 88, 106)" }}
          />{" "}
          <span>Home</span>
        </Col>
        <Col className="py-2">
          <FontAwesomeIcon
            icon="fa-solid fa-table-cells-large"
            size="xl"
            style={{ color: "rgb(250, 88, 106)" }}
          />{" "}
          <span>Novità</span>
        </Col>
        <Col className="py-2">
          <FontAwesomeIcon
            icon="fa-solid fa-tower-broadcast"
            size="xl"
            style={{ color: "rgb(250, 88, 106)" }}
          />{" "}
          <span>Radio</span>
        </Col>
      </Row>
    </Row>
  )
}

export default Sidebar
