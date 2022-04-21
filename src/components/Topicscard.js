import React from 'react'

import { featuredtopics } from "../data/data.js";

import { Card} from "react-bootstrap";

import { NavLink } from 'react-router-dom';


export const Topicscard = () => {

  return (
    <>
       <div className="container d-flex justify-content-center align-items-center a flex-column">
        <h2>Featured Topics</h2>
        <h4 className="card-text">Advice, staff picks, and more. Let us help you.</h4>
      </div>
      <br />
      <br />
      <div className="container d-flex flex-wrap justify-content-between ">
        {featuredtopics.map((items, index) => {
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
              <h4><NavLink to="/featuredtopics" className="cards-link">{items.title}</NavLink></h4>
                <Card.Title>{items.heading}</Card.Title>
                <Card.Text>
                 {items.article}
                </Card.Text>
              </Card.Body>
              <Card.Body className="d-flex justify-content-between align-items-center" style={{ padding: "0 20px", margin: "30px" }}>


                    <p>{items.date}</p>
                    <h4 className="cards-link"><NavLink to="/featuredtopics" className="cards-link">Read Review</NavLink></h4>
                  
                  </Card.Body>
            </Card>
          );
        })}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="container d-flex justify-content-center align-items-center a flex-column">
      <h2 className="cards-link"><NavLink to="/featuredtopics" className="cards-link">See All Featured Lists </NavLink></h2>
      </div>

    </>
  )
}
