import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ExploreSection = (props) => {
  return (
    <div
      style={{ color: "rgb(250, 88, 106)" }}
      className="p-3 d-flex justify-content-between align-items-center bg-light-subtle rounded-3 mb-3">
      <p className="m-0">{props.section}</p>{" "}
      <FontAwesomeIcon size="xs" icon="fa-solid fa-chevron-right" />
    </div>
  )
}
export default ExploreSection
