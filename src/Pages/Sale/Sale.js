import React from "react";
import Grid from "../../components/Grid/Grid";
import classes from "../styles/PageStyles.module.css";
import { data } from "./data";

const Sale = () => {
  return (
    <section className={classes.page}>
      <Grid data={data} />
    </section>
  );
};

export default Sale;
