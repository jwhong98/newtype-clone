import React from "react";
import Hero from "../Hero/Hero";
import InfoNav from "../InfoNav/InfoNav";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <Hero />
      <InfoNav />
    </main>
  );
};

export default Main;
