import React from "react";
import Card from "../Card.jsx/Card";
import Card2 from "../Card2/Card2";
import Nav from "../Navigation/Nav";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="test">
        <Card />
        <hr className="line" />
        <Card2 />
      </div>
    </div>
  );
};

export default Home;
