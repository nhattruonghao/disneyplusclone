import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function imgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel>
      <Slider {...settings}>
        <SliderItem>
          <img src="assets/images/slider-badag.jpg" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="assets/images/slider-badging.jpg" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="assets/images/slider-scale.jpg" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="assets/images/slider-scales.jpg" alt="" />
        </SliderItem>
      </Slider>
    </Carousel>
  );
}

export default imgSlider;


const Carousel = styled.div`
    margin-top: 25px;
    ul li button {
      &:before{
        color: rgb(150, 158, 171);
      }
      
    }

    li.slick-active button:before {
      color: white;
      opacity: 1;
    }

    button {
      z-index: 1;
    }
    .slick-list {
        overflow: visible;
    }
    
`
const SliderItem = styled.div`
    img{
        border-radius: 5px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        border: 4px solid rgba(255,255,255, 0);
        transition: all 0.1s ease-in;  
        &:hover {
          border: 4px solid rgba(249, 249, 249, 0.8); 
        }


    }
`
