import base from "../../base.js";
import backdrop from "../../img/backdrop.jpg";

const homepageStyle = {
  backdrop: {
    backgroundImage: "url(" + backdrop + ")",
    backgroundRepeat: "repeat-y",
  },
  container: {
    overflow: "hidden",
    minHeight: "150vh",
  },
  title: {
    width: "80vw",
    marginRight: "10vw",
    marginLeft: "10vw",
    marginTop: "5vw",
    textAlign: "center",
    paddingTop: "15px",
    paddingBottom: "15px",
    color: "white",
    backgroundColor: "rgba(0, 0, 0,0.3)",
  },
  schelas: {
    color: base.titleColor,
    fontSize: "32pt",
  },
};

export default homepageStyle;
