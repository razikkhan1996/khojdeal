import React from "react";
import "./cards.css";


import { data } from "../data/data.js";

import image1 from '../assets/sarah.jpg';
// import image2 from '../assets/toilettoy.jpg';
// import image3 from '../assets/woodentable.jpg';

import { Card, Button,Tooltip,OverlayTrigger} from "react-bootstrap";

export const Cards = ({props}) => {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Author:Sarah Cole
        </Tooltip>
      );
      

  return (
    <>
      <div className="container d-flex justify-content-between">
        <h3>Featured Articles</h3>
        <h3 className="cards-link">View all</h3>
      </div>
      <br />
      <br />
      <div className="container d-flex flex-wrap justify-content-between ">
        {data.map((items, index) => {
          return (
            <Card
              className="card-content"
              key={index}
            >
              <Card.Img
                variant="top"
                src={items.image}
                style={{ borderRadius: "10px 10px 0 0" }}
              />
              <Card.Body style={{ padding: "0 20px", margin: "30px" }}>
                <Card.Title>{items.heading}</Card.Title>
                <Card.Text>
                 {items.article}
                </Card.Text>
              </Card.Body>
              <Card.Body className="d-flex justify-content-between align-items-center" style={{ padding: "0 20px", margin: "30px" }}>
                   <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        {/* <Button variant="success">Hover me to see</Button> */}
                        <img src={image1} alt="bottomimage" className="bottom-img"/>
                    </OverlayTrigger>,

                    <p>{items.date}</p>
                  
                  </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};
