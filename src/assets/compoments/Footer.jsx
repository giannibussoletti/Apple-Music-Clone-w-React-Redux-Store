import { Col, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <Row className="bg-light-subtle mt-5 py-5">
      <Col style={{ fontSize: ".8rem" }}>
        <p>Italia | English</p>
        <p className="mb-1">Copyright @ 2024 Apple Inc. Tutti i diritti riservati.</p>
        <p>
          Condizioni dei servizi internet | Apple Music e privacy | Avviso sui cookie | Supporto |
          Feedback
        </p>
      </Col>
    </Row>
  )
}
export default Footer
