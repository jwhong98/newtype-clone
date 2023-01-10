import React from "react";
import Grid from "../Grid/Grid";
import classes from "./Home.module.css";
import { data } from "./data";

const Home = () => {
  return (
    <section className={classes.home}>
      <Grid data={data} />
    </section>
  );
};

export default Home;
