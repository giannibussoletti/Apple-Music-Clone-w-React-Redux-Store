import { Col, Image } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { playSongAlbumAction } from "../redux/action"
import { useSelector } from "react-redux"
const SingleAlbumOrSong = (props) => {
  const songs = useSelector((reduxStore) => reduxStore.fetch.songs.data)
  const dispatch = useDispatch()

  return (
    <Col
      xs={12}
      sm={6}
      md={3}
      xl={2}
      className="mb-3"
      onClick={() => {
        const singleSong = songs.filter((singleSong) => singleSong.id === props.id)

        dispatch(playSongAlbumAction(singleSong[0]))
      }}>
      <Image className="w-100" src={props.cover} />
      <p className="m-0 mt-2">{props.song}</p>
      <p className="m-0 opacity-75">{props.artist}</p>
    </Col>
  )
}
export default SingleAlbumOrSong
