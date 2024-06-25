import React from "react";
import "./Carousel.js";
const images = [
  {
    src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/690x300_Galaxy-S24_06%20(2).png",
    thumb: "img_5terre.jpg",
    alt: "Cinque Terre",
  },
  {
    src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/realme-c60-sliding-25-6-2024.png",
    thumb: "img_mountains.jpg",
    alt: "Mountains and fjords",
  },
  {
    src: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/nang-cap-iphone-15-prm-chip-sliding-20-602024.jpg",
    thumb: "img_lights.jpg",
    alt: "Northern Lights",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const plusSlides = (n: number) => {
    setCurrentSlide((prev) => {
      let nextSlide = prev + n;
      if (nextSlide < 1) {
        nextSlide = images.length;
      } else if (nextSlide > images.length) {
        nextSlide = 1;
      }
      return nextSlide;
    });
  };

  return (
    <div className="carousel">
      <div className="container">
        {images.map((img, index) => (
          <div
            key={index}
            className={`mySlides ${currentSlide === index + 1 ? "active" : ""}`}
            style={{ display: currentSlide === index + 1 ? "block" : "none" }}
          >
            <img src={img.src} style={{ width: "100%" }} alt={img.alt} />
          </div>
        ))}
        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
    </div>
  );
}

export default Carousel;
