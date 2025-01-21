import React, { useState } from "react";
import { cardData, recommendationManga, recommendationVideo } from "./CardData"; // Import the data
import "./card.css";

const Card = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <div className="cardWrap">
        <div className="recommendationWrap">
          <br />
          <h1>おすすめの漫画</h1>
          {recommendationManga.map((manga) => (
            <div key={manga.id} className="recommendation">
              <h1>{manga.no}</h1>
              <div className="dataWrap">
                <p className="title">{manga.title}</p>
                <p className="date">{manga.date}</p>
                <p className="category">{manga.category}</p>
                <p className="content">{manga.content}</p>
              </div>
              <img src={manga.img} alt="" />
            </div>
          ))}

          <h1>おすすめの漫画</h1>
          <br />
          {recommendationVideo.map((video) => (
            <div key={video.id} className="recommendation">
              <h1>{video.no}</h1>
              <div className="dataWrap">
                <p className="title">{video.title}</p>
                <p className="date">{video.date}</p>
                <p className="category">{video.category}</p>
                <p className="content">{video.content}</p>
              </div>
              <img src={video.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
