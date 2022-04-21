import React from 'react';
import "./cards.css";


import { Card, Button,Tooltip,OverlayTrigger} from "react-bootstrap";

import { categories} from "../data/data.js";

import image1 from '../assets/sarah.jpg';

export const Category = () => {

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1>Browse by Categories</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container d-flex flex-wrap justify-content-between ">
        {categories.map((items, index) => {
          return (
            <Card
              className="card-content"
              key={index}
            >
            <div className='image-container hover'>
              <div className="image-content zoom d-flex justify-content-center align-items-end" style={{height:"200px",borderRadius: "10px 10px 10px 10px",backgroundImage: `url(${items.image}`}}>
                    <h3 className='text-light'>{items.title}</h3>
              </div>
            </div>
            </Card>
          );
        })}
      </div>
    </>
  )
}
