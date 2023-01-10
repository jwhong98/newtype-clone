import React, { useEffect, useState } from "react";
import classes from "./Hero.module.css";
import hero1 from "../../assets/hero/hero1.png";
import hero2 from "../../assets/hero/hero2.png";
import hero3 from "../../assets/hero/hero3.png";
import hero4 from "../../assets/hero/hero4.png";
import hero5 from "../../assets/hero/hero5.png";

const Hero = () => {
  const imgArr = [hero1, hero2, hero3, hero4, hero5];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(activeIndex);
      if (activeIndex === 4) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prevIndex) => prevIndex + 1);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const onClickHandler = (e) => {
    setActiveIndex(+e.target.dataset.value);
  };

  return (
    <section className={classes.hero}>
      <img src={imgArr[activeIndex]} alt="hero-img" />
      <div className={classes.carouselNav}>
        <div
          className={`${classes.carouselNavDot} ${
            activeIndex === 0 ? classes.active : ""
          }`}
          data-value="0"
          onClick={onClickHandler}
        ></div>
        <div
          className={`${classes.carouselNavDot} ${
            activeIndex === 1 ? classes.active : ""
          }`}
          data-value="1"
          onClick={onClickHandler}
        ></div>
        <div
          className={`${classes.carouselNavDot} ${
            activeIndex === 2 ? classes.active : ""
          }`}
          data-value="2"
          onClick={onClickHandler}
        ></div>
        <div
          className={`${classes.carouselNavDot} ${
            activeIndex === 3 ? classes.active : ""
          }`}
          data-value="3"
          onClick={onClickHandler}
        ></div>
        <div
          className={`${classes.carouselNavDot} ${
            activeIndex === 4 ? classes.active : ""
          }`}
          data-value="4"
          onClick={onClickHandler}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
