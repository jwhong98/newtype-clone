import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InfoNav />}>
            <Route index element={<Home />} />
            <Route path="restocks" element={<Restocks />} />
            <Route path="future" element={<Future />} />
            <Route path="featured" element={<Featured />} />
            <Route path="sale" element={<Sale />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Main;
