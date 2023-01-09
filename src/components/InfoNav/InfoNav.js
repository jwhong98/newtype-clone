import React from "react";
import classes from "./InfoNav.module.css";
import Tab from "./Tab";

const InfoNav = () => {
  return (
    <div className={classes.infoNavContainer}>
      <nav className={classes.infoNav}>
        <Tab label="new arrivals" active={true} />
        <Tab label="restocks" />
        <Tab label="future" />
        <Tab label="featured" />
        <Tab label="sale" />
      </nav>
    </div>
  );
};

export default InfoNav;
