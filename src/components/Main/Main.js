import React from "react";
import Featured from "../../Pages/Featured/Featured";
import Future from "../../Pages/Future/Future";
import Home from "../../Pages/Home/Home";
import Restocks from "../../Pages/Restocks/Restocks";
import Sale from "../../Pages/Sale/Sale";
import Hero from "../Hero/Hero";
import InfoNav from "../InfoNav/InfoNav";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <Hero />
      <InfoNav />
      {/* <Home /> */}
      {/* <Restocks /> */}
      {/* <Future /> */}
      {/* <Featured /> */}
      <Sale />
    </main>
  );
};

export default Main;
