import React from "react";
import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  return (
    <>
      <div className={classes.dropdownContainer}>
        <div className={classes.dropdown}>{props.label}</div>
        <div className={classes.dropdownMenu}>DROPDOWN</div>
      </div>
    </>
  );
};

export default Dropdown;
