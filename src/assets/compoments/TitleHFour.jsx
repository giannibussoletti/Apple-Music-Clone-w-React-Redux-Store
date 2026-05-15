import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TitleHFour = (props) => {
  return (
    <h4 className="fw-bold">
      {props.title}{" "}
      {props.icon ? <FontAwesomeIcon size="xs" icon="fa-solid fa-chevron-right" /> : ""}
    </h4>
  )
}

export default TitleHFour
