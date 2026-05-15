import { Col, Row } from "react-bootstrap"
import TitleHFour from "./TitleHFour"
import { useSelector } from "react-redux"
import ExploreSection from "./ExploreSection"
const Explore = () => {
  const sections = useSelector((reduxStore) => reduxStore.sections.sections)
  return (
    <Row className="mt-5">
      <Col xs={12}>
        <TitleHFour title="Altro da Esplorare" icon={false} />
        {sections.map((sec, i) => {
          return <ExploreSection key={sec + i} section={sec} />
        })}
      </Col>
    </Row>
  )
}
export default Explore
