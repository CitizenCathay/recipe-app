import React from "react";
import TrendingCard from "./TrendingCard";

const TrendingSection = () => {
  const trendingData = [
    {
      keyword: "italian",
      pictureUrl: "/italian_food.jpg",
      title: "Italian Cuisine",
    },
    {
      keyword: "chinese",
      pictureUrl: "/chinese_food.jpg",
      title: "Chinese Cuisine",
    },
    {
      keyword: "spanish",
      pictureUrl: "/spanish_food.jpg",
      title: "Spanish Cuisine",
    },
    {
      keyword: "indian",
      pictureUrl: "/indian_food.jpg",
      title: "Indian Cuisine",
    },
  ];
  const searchTerms = ["Italian", "Chinese", "Spanish", "Indian"];
  return (
    <section>
      <h2 className="text-2xl mt-4 mb-2 font-bold">Trending Cuisines</h2>
      <div className="cards_container flex justify-between gap-4">
        {trendingData.map((data, index) => (
          <TrendingCard
            key={index}
            index={index}
            keyword={data.keyword}
            title={data.title}
            pictureUrl={data.pictureUrl}
            searchTerms={searchTerms}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
