import React from "react";
import FeaturedCard from "./FeaturedCard";

const ContentSection = () => {
  return (
    <section>
      <h2 className="text-3xl sm:text-2xl mt-7 mb-4 sm:mb-2 font-bold">
        Featured Recipes
      </h2>
      <div className="cards_container gap-4 pb-4 flex flex-wrap sm:flex-nowrap mx-auto">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </section>
  );
};

export default ContentSection;
