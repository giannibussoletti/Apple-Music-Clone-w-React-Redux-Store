import { Row } from "react-bootstrap"
import TitleHFour from "./TitleHFour"
import SingleAlbumOrSong from "./SingleAlbumOrSong"

const imgName = ["a", "b", "c", "d", "e", "f"]
const RadioEpisode = (props) => {
  return (
    <Row className="mt-5">
      <TitleHFour title={props.title} icon={props.icon} />
      <Row className="flex-nowrap overflow-scroll mx-0">
        {imgName.map((radio, i) => {
          return (
            <SingleAlbumOrSong
              key={i + radio}
              cover={"images/2" + radio + ".png"}
              song="Song Placeholder"
              isPlayable={false}
            />
          )
        })}
      </Row>
    </Row>
  )
}
export default RadioEpisode
