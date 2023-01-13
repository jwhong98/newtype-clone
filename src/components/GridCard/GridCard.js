import React from "react";
import classes from "./GridCard.module.css";

const GridCard = (props) => {
  return (
    <div className={classes.gridCard}>
      <div
        style={{ backgroundImage: `url(${props.img})` }}
        className={classes.cardImg}
      ></div>
      <div className={classes.prodInfo}>
        <p className={classes.cardInfo}>{props.brand}</p>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.cardInfo}>{props.prodType}</p>
        <div className={classes.stockInfo}>
          <p className={classes.cardInfo}>${props.price}</p>
          <p className={classes.cardInfo}>{props.availability}</p>
        </div>
      </div>
      <button className={classes.addBtn}>add to bag</button>
    </div>
  );
};

export default GridCard;
