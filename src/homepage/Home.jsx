import ResponsiveAppBar from "./components/Header";
import React from "react";
import Mainpage from "./components/Mainpage";
import ProductPage from "../products/ProductPage";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <Mainpage /> <ProductPage />
      <Footer />
    </>
  );
}

export default Home;
