import React from "react";
import classes from "./Tab.module.css";

const Tab = (props) => {
  const active = props.active ? classes.active : "";
  return <div className={`${classes.tab} ${active}`}>{props.label}</div>;
};

export default Tab;
