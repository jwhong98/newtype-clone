import React from "react";
import classes from "./LinkContainer.module.css";

const LinkContainer = () => {
  return (
    <div className={classes.linkContainer}>
      <a href="/">help</a>
      <a href="/">sign in</a>/<a href="/">register</a>
    </div>
  );
};

export default LinkContainer;
