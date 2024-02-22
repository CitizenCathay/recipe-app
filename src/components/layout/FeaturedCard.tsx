import React from "react";
import Image from "next/image";
import cardImage from "../../assets/card-image.jpg";

const FeaturedCard = () => {
  return (
    <div className="featured__card cursor-pointer px-10 py-0 sm:p-0 group">
      <Image src={cardImage} alt="image of pasta" className="rounded-xl" />
      <h3 className="font-semibold text-2xl sm:text-base group-hover:underline underline-offset-4">
        Butternut Squash Soup
      </h3>
      <p className="recipe__card-time text-lg sm:text-base no-underline">
        35 mins · 4.5 ★
      </p>
    </div>
  );
};

export default FeaturedCard;
