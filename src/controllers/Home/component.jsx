import React from "react";
import Body from "../Body/component";
import Cart from "../ProductDetail/component";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/component";
import Footer from "../Footer/component";
import TotalProducts from "../WholeItem/component";

function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="productDetails/:productId" element={<Cart />} />
        <Route path="cart" element={<TotalProducts />} />
        <Route path="/" element={<Body />} />
        <Route path="*" element={<div>404 Not Found!</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default Home;
