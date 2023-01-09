import React from "react";
import classes from "./Hero.module.css";
import heroImg from "../../assets/hero2.png";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <img src={heroImg} alt="hero-img" />
    </section>
  );
};

export default Hero;
