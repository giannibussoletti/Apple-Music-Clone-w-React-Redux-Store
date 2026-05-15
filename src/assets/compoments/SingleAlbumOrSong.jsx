import { Col, Image } from "react-bootstrap"

const SingleAlbumOrSong = (props) => {
  return (
    <Col xs={12} sm={6} md={3} xl={2} className="mb-3" onClick={() => {}}>
      <Image className="w-100" src={props.cover} />
      <p className="m-0 mt-2">{props.song}</p>
      <p className="m-0 opacity-75">{props.artist}</p>
    </Col>
  )
}
export default SingleAlbumOrSong
