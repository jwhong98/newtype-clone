import React from "react";
import Dropdown from "../DropdownContainer/Dropdown";
import DropdownContainer from "../DropdownContainer/DropdownContainer";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <DropdownContainer />
      <div className={classes.nonDropContainer}>
        <Dropdown label="3d printing" />
        <Dropdown label="labs" />
      </div>
    </nav>
  );
};

export default Navbar;
