import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import homepageStyle from "../assets/jss/views/homepageStyle";
import Home from "../components/Home.js";

const useStyles = makeStyles(homepageStyle);

export default function Homepage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>
          THIS IS
          <br />
          SCHELAS®
        </h1>
      </div>
      <Home />
    </div>
  );
}
