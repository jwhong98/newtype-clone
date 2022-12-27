import React from "react";
import LinkContainer from "../LinkContainer/LinkContainer";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <LinkContainer />
    </nav>
  );
};

export default Navbar;
