import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import homepageStyle from "../assets/jss/views/homepageStyle";
import Home from "../components/Home.js";

const useStyles = makeStyles(homepageStyle);

export default function Homepage() {
  const classes = useStyles();

  return (
    <div className={classes.backdrop}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>THIS IS</h2>
          <h1 className={classes.schelas}>SCHELAS®</h1>
        </div>
        <Home />
      </div>
    </div>
  );
}
