import React from "react";
import Hero from "../Hero/Hero";
import Home from "../Home/Home";
import InfoNav from "../InfoNav/InfoNav";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <Hero />
      <InfoNav />
      <Home />
    </main>
  );
};

export default Main;
