import React, { useState } from "react";
import Card from "../Card/Card";
import Card2 from "../Card2/Card2";
import { cardData } from "../Card/CardData";
import Nav from "../Navigation/Nav";
import "./home.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Handle category change (by button click)
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set the category based on the clicked button
  };

  // Filter data based on the selected category
  const filteredData = selectedCategory
    ? cardData.filter(
        (card) => card.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : cardData; // If no category selected, show all
  return (
    <div>
      <Nav />

      <div className="filter-wrap">
        <button
          className={`filter-button ${selectedCategory === "" ? "active" : ""}`}
          onClick={() => handleCategoryClick("")}
        >
          全て
        </button>

        <button
          className={`filter-button ${
            selectedCategory === "A" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("A")}
        >
          オフィス場面
        </button>
        <button
          className={`filter-button ${
            selectedCategory === "B" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("B")}
        >
          レストラン場面
        </button>
        <button
          className={`filter-button ${
            selectedCategory === "C" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("C")}
        >
          学校場面
        </button>
      </div>

      <div className="test">
        <Card />
        <Card2 data={filteredData} />
      </div>
    </div>
  );
};

export default Home;
