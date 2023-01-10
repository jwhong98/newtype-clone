import React from "react";
import GridCard from "../GridCard/GridCard";
import classes from "./Grid.module.css";

const Grid = (props) => {
  const createCard = (data) => {
    return (
      <GridCard
        img={data.img}
        brand={data.brand}
        name={data.name}
        prodType={data.prodType}
        price={data.price}
        availability={data.availability}
      />
    );
  };
  return (
    <div className={classes.gridContainer}>{props.data.map(createCard)}</div>
  );
};

export default Grid;
