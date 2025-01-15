import React from "react";
import Slider from "react-slick";
import homeImage1 from "../assets/homeImage1.png";
import homeImage2 from "../assets/homeImage2.png";
import homeImage3 from "../assets/homeImage3.png";
import homeImage4 from "../assets/homeImage4.png";

export default function Crousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="relative w-full h-72 overflow-hidden">
      {/* Carousel Content */}
      <div className="absolute w-full h-full top-0 z-0">
        <Slider {...settings}>
          <div className="relative w-full h-screen">
            <img
              src={homeImage1}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
          </div>
          <div className="relative w-full h-screen">
            <img
              src={homeImage2}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
          </div>
          <div className="relative w-full h-screen">
            <img
              src={homeImage3}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
          </div>
          <div className="relative w-full h-screen">
            <img
              src={homeImage4}
              alt="Image 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
          </div>
        </Slider>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl z-10"
        onClick={() => document.querySelector(".slick-prev").click()}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl z-10"
        onClick={() => document.querySelector(".slick-next").click()}
      >
        &#8250;
      </button>

      {/* Underflow Adjustment */}
      <div className="absolute w-full top-1/3 z-[-1] h-2/3 bg-transparent"></div>
    </div>
  );
}
