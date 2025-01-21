import React, { useState } from "react";
import { cardData } from "../Card/CardData";
import "./card2.css";
import { Link } from "react-router-dom";

const Card2 = ({ data }) => {
  const [activeState, setActiveState] = useState("動画");
  const handleStateClick = (state) => {
    setActiveState(state);
  };
  return (
    <div className="lectureWrap">
      <div className="toggle">
        <p
          className={`select-category ${
            activeState === "漫画" ? "active" : ""
          }`}
          onClick={() => handleStateClick("漫画")}
        >
          漫画
        </p>
        <p
          className={`select-category ${
            activeState === "動画" ? "active" : ""
          }`}
          onClick={() => handleStateClick("動画")}
        >
          動画
        </p>
      </div>

      {data.map((card) => (
        <div key={card.id} className="card-list-wrap">
          <Link to="lecture">
            <div className="card-list">
              <h1 className="card-number">{card.no}</h1>
              <img src={card.img} alt="" />
              <div className="card-data">
                <h2 className="title">{card.title}</h2>
                <p className="date">{card.date}</p>
                <p className="content">{card.content}</p>
              </div>
            </div>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Card2;
