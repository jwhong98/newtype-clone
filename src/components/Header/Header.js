import React from "react";
import LinkContainer from "../LinkContainer/LinkContainer";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerWrap}>
        <LinkContainer />
        <div className={classes.headerMid}>
          <img className={classes.logo} src={logo} alt="logo" />
          <SearchBar />
        </div>
        <div className={classes.headerLast}>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
