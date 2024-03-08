"use client";
import React from "react";
import Image from "next/image";
import cardImage from "../../assets/card-image.jpg";
import Link from "next/link";
import * as api from "../../utils/api";
import { useState } from "react";

interface TrendingCardProps {
  index: number;
}

const TrendingCard: React.FC<TrendingCardProps> = ({ index }) => {
  const searchTerms = ["Italian", "Chinese", "Spanish", "Indian"];
  const [recipes, setRecipes] = useState([]);
  const searchTerm = searchTerms[index];

  const handleSearch = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    try {
      const recipes = await api.searchTrending(searchTerm, 1);
      setRecipes(recipes);
      console.log(recipes);
    } catch (e) {
      console.log(e);
    }

    console.log("Search query:", searchTerm);
  };

  return (
    <Link
      href={`/search/${searchTerm}`}
      className="trending__card cursor-pointer group"
      onClick={handleSearch}
    >
      <Image src={cardImage} alt="image of pasta" className="rounded-xl" />
      <h3 className="font-semibold text-sm sm:text-base pt-1 group-hover:underline underline-offset-4">
        Butternut Squash Soup
      </h3>
      <p className="trending__card-time text-sm sm:text-base no-underline">
        50+ recipes
      </p>
    </Link>
  );
};

export default TrendingCard;
