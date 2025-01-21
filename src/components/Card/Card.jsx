import React, { useState } from "react";
import { cardData, recommendationManga, recommendationVideo } from "./CardData"; // Import the data
import "./card.css";

const Card = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <div className="card-wrap">
        <h1>おすすめの漫画</h1>
        <div className="recommendation-wrap">
          {recommendationManga.map((manga) => (
            <div key={manga.id} className="recommendation">
              <h1 className="number">{manga.no}</h1>
              <div className="dataWrap">
                <p className="title">{manga.title}</p>
                <p className="date">{manga.date}</p>
                <p className="category">{manga.category}</p>
                <p className="content">{manga.content}</p>
              </div>
              <img src={manga.img} alt="" />
            </div>
          ))}
        </div>

        <h1>おすすめの動画</h1>
        <div className="recommendation-wrap">
          {recommendationVideo.map((video) => (
            <div key={video.id} className="recommendation">
              <h1 className="number">{video.no}</h1>
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
