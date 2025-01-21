import React from "react";
import { cardData } from "../Card.jsx/CardData"; // Import the data
import "./card2.css";
const Card2 = () => {
  return (
    <div className="lectureWrap">
      {cardData.map((card) => (
        <div key={card.id} className="card-list-wrap">
          <div className="card-list">
            <h1>{card.no}</h1>
            <img src={card.img} alt="" />
            <div className="card-data">
              <h2 className="title">{card.title}</h2>
              <p className="date">{card.date}</p>
              <p className="content">{card.content}</p>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Card2;
