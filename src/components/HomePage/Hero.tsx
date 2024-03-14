import React from "react";
import Searchbar from "../HomePage/Searchbar";

const Hero = () => {
  return (
    <section className="mt-8">
      <div className="hero__container bg-[url('/pasta.jpg')] bg-cover rounded-lg h-96 p-9">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-whitePrimary">
          Find your next favourite recipe
        </h1>
        <p className="text-xl sm:text-2xl text-whitePrimary mb-8 mt-2">
          Discover many delicious recipes with just the click of a button.
        </p>
        <Searchbar />
      </div>
    </section>
  );
};

export default Hero;
