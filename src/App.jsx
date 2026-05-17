import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/style.css"
// Compoment
import NavBar from "./assets/compoments/NavBar"
import CoverSections from "./assets/compoments/CoverSections"
import CardNovità from "./assets/compoments/CardNovità"
import Explore from "./assets/compoments/Explore"
import Footer from "./assets/compoments/Footer"
import RadioEpisode from "./assets/compoments/RadioEpisode"
import Sidebar from "./assets/compoments/Sidebar"
import MediaPlayer from "./assets/compoments/MediaPlayer"
//
import { Col, Container, Row } from "react-bootstrap"
import { handleFetchSong } from "./assets/redux/action"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

/* FontAwesome */
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fas, far, fab)

const App = function () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleFetchSong())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col
          lg={4}
          xxl={2}
          style={{ backgroundColor: "#252526" }}
          className="d-none d-lg-block p-0 m-0">
          <Sidebar />
        </Col>
        <Col md={12} lg={8} xxl={10} className="border-start border-2 position-relative">
          <NavBar />
          <CardNovità />
          <RadioEpisode title="Nuovi episodi radio" icon={true} />
          <CoverSections title="Nuove uscite" icon={true} />
          <Explore />
          <Footer />
          <MediaPlayer />
        </Col>
      </Row>
    </Container>
  )
}

export default App
