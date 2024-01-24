import ResponsiveAppBar from "./components/Header";
import React from "react";
import Mainpage from "./components/Mainpage";
import ProductPage from "../products/ProductPage";

function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <Mainpage /> <ProductPage />
    </>
  );
}

export default Home;
