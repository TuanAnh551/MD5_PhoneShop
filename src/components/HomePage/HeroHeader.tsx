import React from "react";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import Carousel from "@/components/HomePage/Carosel/Carousel";
import Banners from "@components/HomePage/Banner/Banners";
import ProductList from "@components/HomePage/Product/ProductList";
import "./HeroHeader.scss";

function HeroHeader() {
  return (
    <>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Carousel />
        </main>
        <Banners />
      </div>
      <div className="product">
        <ProductList />
      </div>
    </>
  );
}

export default HeroHeader;
