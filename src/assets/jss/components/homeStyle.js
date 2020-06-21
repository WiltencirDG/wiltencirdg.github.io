import base from "../../base.js";

const homeStyle = {
  container: {
    marginRight: "10vw",
    marginLeft: "10vw",
    marginTop: "5vw",
    marginBottom: "5vw",
    height: "100%",
    width: "80vw",
    flexGrow: "1",
  },
  tabs: {
    color: base.titleColor,
    backgroundColor: base.backgroundColor2,
    Tab: {
      background: "red",
    },
  },
  tabIndicator: {
    background: base.primaryColorDark,
  },
  project: {
    backgroundColor: base.backgroundColor,
    color: base.textColor,
  },
  title: {
    fontFamily: "'Helvetica' 'sans-serif'",
    fontSize: "24pt",
    fontWeight: "bold",
    textAlign: "center",
    color: base.titleColor,
  },
  subTitle: {
    color: base.titleColor,
    fontFamily: "'Helvetica' 'sans-serif'",
    fontSize: "16pt",
    fontWeight: "600",
    textAlign: "center",
  },
  content: {
    fontFamily: "'Helvetica' 'sans-serif'",
    fontSize: "16pt",
    textAlign: "center",
  },
  crewContent: {
    margin: "0 auto",
    selfAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "transparent",
    fontFamily: "'Helvetica' 'sans-serif'",
    fontSize: "16pt",
    textAlign: "center",
    width: "50%",
  },
  dev: {
    textAlign: "center",
    display: "inline",
  },
  devName: {},
  contact: {},
  banner: {
    borderRadius: "8px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "300px",
    height: "300px",
    cropImage: "center",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    objectFit: "cover",
    objectPosition: "center",
  },
};

export default homeStyle;
