import React from "react";
import Dropdown from "./Dropdown";
import classes from "./DropdownContainer.module.css";

const DropdownContainer = () => {
  return (
    <div className={classes.dropdownContainer}>
      <Dropdown label="model kits" dropdown={true} />
      <Dropdown label="figures" dropdown={true} />
      <Dropdown label="minis" dropdown={true} />
      <Dropdown label="paints" dropdown={true} />
      <Dropdown label="tools" dropdown={true} />
      <Dropdown label="accessories" dropdown={true} />
    </div>
  );
};

export default DropdownContainer;
