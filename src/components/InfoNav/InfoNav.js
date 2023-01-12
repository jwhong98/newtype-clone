import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import classes from "./InfoNav.module.css";

const InfoNav = () => {
  const [isActive, setIsActive] = useState("na");
  const onClickHandler = (e) => {
    setIsActive(e.target.dataset.value);
  };
  return (
    <>
      <div className={classes.infoNavContainer}>
        <nav className={classes.infoNav}>
          <Link
            to="/"
            className={`${classes.tab} ${
              isActive === "na" ? classes.active : ""
            }`}
            onClick={onClickHandler}
            data-value="na"
          >
            new arrivals
          </Link>

          <Link
            to="/restocks"
            className={`${classes.tab} ${
              isActive === "re" ? classes.active : ""
            }`}
            onClick={onClickHandler}
            data-value="re"
          >
            restocks
          </Link>
          <Link
            to="/future"
            className={`${classes.tab} ${
              isActive === "fu" ? classes.active : ""
            }`}
            onClick={onClickHandler}
            data-value="fu"
          >
            future
          </Link>
          <Link
            to="/featured"
            className={`${classes.tab} ${
              isActive === "fe" ? classes.active : ""
            }`}
            onClick={onClickHandler}
            data-value="fe"
          >
            featured
          </Link>
          <Link
            to="/sale"
            className={`${classes.tab} ${
              isActive === "sa" ? classes.active : ""
            }`}
            onClick={onClickHandler}
            data-value="sa"
          >
            sale
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default InfoNav;
