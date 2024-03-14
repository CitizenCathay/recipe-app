import React from "react";
import TrendingCard from "./TrendingCard";

const ContentSection = () => {
  const trendingData = [
    {
      keyword: "dumpling",
      pictureUrl: "/dumpling.jpg",
      title: "Dumplings",
    },
    {
      keyword: "cake",
      pictureUrl: "/cake.jpg",
      title: "Cake",
    },
    {
      keyword: "steak",
      pictureUrl: "/steak.jpg",
      title: "Steak",
    },
    {
      keyword: "burger",
      pictureUrl: "/burger.jpg",
      title: "Burgers",
    },
    {
      keyword: "waffles",
      pictureUrl: "/waffles.jpg",
      title: "Waffles",
    },
  ];
  const searchTerms = ["Dumplings", "Cake", "Steak", "Burgers", "Waffles"];
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

export default ContentSection;
