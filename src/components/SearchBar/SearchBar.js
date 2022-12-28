import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={classes.searchContainer}>
      <form className={classes.searchForm} action="/">
        <input
          type="text"
          name="searchItem"
          id="searchItem"
          className={classes.input}
          placeholder="Search..."
        />
        <button type="submit" id={classes.submitBtn}>
          <ion-icon name="search"></ion-icon>
        </button>
      </form>
      <button>shopIcon</button>
    </div>
  );
};

export default SearchBar;
