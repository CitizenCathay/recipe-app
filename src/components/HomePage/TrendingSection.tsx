import React from "react";
import TrendingCard from "./TrendingCard";

const TrendingSection = () => {
  return (
    <section>
      <h2 className="text-2xl mt-4 mb-2 font-bold">Trending Collections</h2>
      <div className="cards_container flex gap-4">
        <TrendingCard index={0} />
        <TrendingCard index={1} />
        <TrendingCard index={2} />
        <TrendingCard index={3} />
      </div>
    </section>
  );
};

export default TrendingSection;
