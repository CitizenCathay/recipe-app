import React from "react";
import Image from "next/image";
import cardImage from "../../assets/card-image.jpg";

const FeaturedCard = () => {
  return (
    <div className="featured__card cursor-pointer px-10 py-0 sm:p-0">
      <Image src={cardImage} alt="image of pasta" className="rounded-xl" />
      <h3 className="font-semibold text-2xl sm:text-base">
        Butternut Squash Soup
      </h3>
      <p className="recipe__card-time text-lg sm:text-base">35 mins</p>
    </div>
  );
};

export default FeaturedCard;
