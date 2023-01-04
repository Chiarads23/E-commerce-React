import React from "react";
import Home from "../Pages/Home";
import Cart from "./Cart/Cart";
import { Route, Routes } from "react-router-dom";


import styles from "../../Styles/Layout/Pages.module.scss";

const Pages = () => {
  return (
    <div>
 
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cart' element={<Cart />}/>
     </Routes>
  
    </div>
  );
};

export default Pages;
