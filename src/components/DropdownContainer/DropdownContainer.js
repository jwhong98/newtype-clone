import React from "react";
import Dropdown from "./Dropdown";
import classes from "./DropdownContainer.module.css";

const DropdownContainer = () => {
  return (
    <div className={classes.dropdownContainer}>
      <Dropdown label="model kits" />
      <Dropdown label="figures" />
      <Dropdown label="minis" />
      <Dropdown label="paints" />
      <Dropdown label="tools" />
      <Dropdown label="accessories" />
    </div>
  );
};

export default DropdownContainer;
