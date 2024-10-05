import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"; // Create this file for custom styles
import { offer_list } from "../../assets/assest";
import './imageSlider.css'


const ImageSlider = () => {
  const settings = {    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="Slider">
     <div className="image-slider">
      <Slider {...settings}>
        {offer_list.map((item, index) => (
          <div key={index} className="image_slider_box">
            <img src={item.offer_image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
     </div>
    </div>
  );
};

export default ImageSlider;