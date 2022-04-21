import React,{ useEffect, useState, useRef} from "react";
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import './cardcarousal.css';


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { carousalimages} from "../data/data.js";
// import { featuredtopics } from "../data/data.js";


import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';


import "./cardcarousal.css";

import { Card, Button,Tooltip,OverlayTrigger} from "react-bootstrap";

export const Cardcarousal = () => {


    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef();
    const slider2 = useRef();

    var settings = {

      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          }
        ]
      };

    
    
  return (
    <>

    <div className="container d-flex justify-content-between align-items-between">
        <h2>Check Out Our Newest Buying Guides</h2>
        <h4 className="cards-link"><NavLink to="/featuredtopics" className="cards-link">See all Guides </NavLink></h4>
      </div>
      <br />
      <br />

<div className="container" style={{ width:"100vw"}}>

<Slider
        asNavFor={nav1}
        ref={slider2 => setNav2(slider2)}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settings}
      >
          {carousalimages.map((items, index) => {
          return (
            <Card
              className="card-content"
              key={index}
              style={{}}
            >
              <Card.Img
                variant="top"
                src={items.image}
                style={{ borderRadius: "10px 10px 0 0",width:"180px",height:"300px" }}
              />
            </Card>
          );
        })}
      </Slider>
</div>
    
    
    </>
  );
};
