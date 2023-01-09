import React, { useState } from "react";
import classes from "./InfoNav.module.css";

const InfoNav = () => {
  const [isActive, setIsActive] = useState("na");
  const onClickHandler = (e) => {
    setIsActive(e.target.dataset.value);
  };
  return (
    <div className={classes.infoNavContainer}>
      <nav className={classes.infoNav}>
        <div
          className={`${classes.tab} ${
            isActive === "na" ? classes.active : ""
          }`}
          onClick={onClickHandler}
          data-value="na"
        >
          new arrivals
        </div>
        <div
          className={`${classes.tab} ${
            isActive === "re" ? classes.active : ""
          }`}
          onClick={onClickHandler}
          data-value="re"
        >
          restocks
        </div>
        <div
          className={`${classes.tab} ${
            isActive === "fu" ? classes.active : ""
          }`}
          onClick={onClickHandler}
          data-value="fu"
        >
          future
        </div>
        <div
          className={`${classes.tab} ${
            isActive === "fe" ? classes.active : ""
          }`}
          onClick={onClickHandler}
          data-value="fe"
        >
          featured
        </div>
        <div
          className={`${classes.tab} ${
            isActive === "sa" ? classes.active : ""
          }`}
          onClick={onClickHandler}
          data-value="sa"
        >
          sale
        </div>
      </nav>
    </div>
  );
};

export default InfoNav;
