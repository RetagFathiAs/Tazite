import React from "react";

import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/landing.jpg";
import sliderImg1 from "../../assets/images/slider/sahara.jpg";
import "../Banner/banner.css"

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="">
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
           <div className="slider_des" >
               {/*
      <h5 className="heading" style={{ color: '#e38e34', fontFamily: 'Cairo, sans-serif' }}>
        EXPLORE LIBYA <small style={{ fontSize: '35px', fontFamily: 'Cairo, sans-serif' }}>WITH</small>
        <span> TAZIET T<small style={{ fontSize: '35px', fontFamily: 'Cairo, sans-serif' }}>OURS</small></span>
      </h5>
      */}
                
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  BEAUTIFUL PLACE <span>TO VISIT</span>
                </h5>
                <p className="sub_text">
                                   Discover the beauty and history of Libya with Taziet Tours. From ancient ruins to stunning landscapes, we offer unforgettable experiences for every traveler. Join us on a journey through time and culture in Libya.

                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
