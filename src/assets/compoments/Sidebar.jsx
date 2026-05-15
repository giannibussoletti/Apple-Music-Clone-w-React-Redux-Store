import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Col, Image, InputGroup, Form, Row, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { handleFetchSong } from "../redux/action"

const Sidebar = () => {
  const dispatch = useDispatch()

  const [search, setSearch] = useState("")
  return (
    <Row className="px-4">
      <Row>
        <Image className="py-3 px-0" style={{ maxWidth: "120px" }} src="logos/music.svg" />
        <InputGroup className="mb-3 px-0">
          <InputGroup.Text
            as={Button}
            className="bg-transparent border-end-0 border-secondary"
            onClick={() => {
              dispatch(handleFetchSong(search))
            }}>
            <FontAwesomeIcon
              icon="fa-solid fa-magnifying-glass"
              style={{ color: "rgb(250, 88, 106)" }}
            />
          </InputGroup.Text>
          <Form.Control
            className="border-start-0 border-secondary"
            placeholder="Cerca..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
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
