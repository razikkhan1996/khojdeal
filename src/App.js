import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import { Search } from "./components/Search";
import { Cards } from "./components/Cards";
import { Topicscard } from "./components/Topicscard";
import { Category } from "./components/Category";
import { Cardcarousal } from "./components/Cardcarousal";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>Help You To Find</h1>
        <h1>Best Camera</h1>
        <br/>
        <p>Check out our reviews before buying anything</p>
        <p>We aim to help you make better shopping decisions</p>
        <br/>
        <Search/>
        <br/>
      </section>
    <Cards/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <Topicscard/>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <Category/>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <Cardcarousal/>


    </>
  );
};

const Blog = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>Help You To Find</h1>
        <h1>Best Laptop</h1>
      </section>
    </>
  );
};

const Products = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1>Help You To Find</h1>
        <h1>Best Mobile</h1>
      </section>
    </>
  );
};


const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/blog">
        <Blog />
      </Route>

      <Route path="/products">
        <Products />
      </Route>

      <Route path="/featuredtopics">
        <Topicscard />
      </Route>
    </Switch>
    </>
  );
};

export default App;
