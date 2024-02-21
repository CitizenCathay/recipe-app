import React from "react";
import TrendingCard from "./TrendingCard";

const TrendingSection = () => {
  return (
    <section>
      <h2 className="text-2xl mt-4 mb-2 font-bold">Trending Collections</h2>
      <div className="cards_container flex gap-4">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </div>
    </section>
  );
};

export default TrendingSection;
