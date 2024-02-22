import React from "react";
import Image from "next/image";
import cardImage from "../../assets/card-image.jpg";

const TrendingCard = () => {
  return (
    <div className="trending__card cursor-pointer group">
      <Image src={cardImage} alt="image of pasta" className="rounded-xl" />
      <h3 className="font-semibold text-sm sm:text-base pt-1 group-hover:underline underline-offset-4">
        Butternut Squash Soup
      </h3>
      <p className="trending__card-time text-sm sm:text-base no-underline">
        50+ recipes
      </p>
    </div>
  );
};

export default TrendingCard;
