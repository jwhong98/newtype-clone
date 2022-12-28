import React from "react";
import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  return <div className={classes.dropdown}>{props.label}</div>;
};

export default Dropdown;
