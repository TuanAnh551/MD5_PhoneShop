import React from "react";
<<<<<<< HEAD
import Navbar from "@pages/home/HomePage/Navbar/Navbar";
import Carousel from "@pages/home/HomePage/Carosel/Carousel";
import Banners from "@pages/home/HomePage/Banner/Banners";
import ProductList from "@pages/home/HomePage/Product/ProductList";
=======
import Navbar from "@/pages/home/HomePage/Navbar/Navbar";
import Carousel from "@/pages/home/HomePage/Carosel/Carousel";
import Banners from "@/pages/home/HomePage/Banner/Banners";
import ProductList from "@/pages/home/HomePage/Product/ProductList";
>>>>>>> 4785305 (update-26/06)
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
