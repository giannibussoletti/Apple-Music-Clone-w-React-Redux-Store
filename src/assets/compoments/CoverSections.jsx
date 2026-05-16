import { Row } from "react-bootstrap"
import TitleHFour from "./TitleHFour"
import { useSelector } from "react-redux"
import SingleAlbumOrSong from "./SingleAlbumOrSong"

const CoverSections = (props) => {
  const songs = useSelector((reduxStore) => reduxStore.fetch.songs.data)
  const isLoading = useSelector((reduxStore) => reduxStore.fetch.isLoading)

  return (
    <Row className="mt-5">
      <TitleHFour title={props.title} icon={props.icon} />
      {isLoading
        ? ""
        : songs.slice(0, 12).map((single) => {
            return (
              <SingleAlbumOrSong
                key={single.id}
                cover={single.album.cover_big}
                song={single.title_short}
                artist={single.artist.name}
                id={single.id}
                isPlayable={true}
              />
            )
          })}
    </Row>
  )
}
export default CoverSections
