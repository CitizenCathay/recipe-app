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
  const h3Styles =
    "font-semibold text-2xl sm:text-base pt-1 group-hover:underline underline-offset-4";
  const paragraphStyles =
    "trending__card-time text-lg sm:text-base no-underline";
  return (
    <section>
      <h2 className="text-2xl mt-4 mb-2 font-bold">Featured Recipes</h2>
      <div className="cards_container flex flex-wrap sm:flex-nowrap mx-auto justify-around sm:justify-between gap-4">
        {trendingData.map((data, index) => (
          <TrendingCard
            key={index}
            index={index}
            keyword={data.keyword}
            title={data.title}
            pictureUrl={data.pictureUrl}
            searchTerms={searchTerms}
            h3Styles={h3Styles}
            paragraphStyles={paragraphStyles}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
