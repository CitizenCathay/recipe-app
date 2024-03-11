"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TrendingCardProps } from "../../utils/types";
import * as api from "../../utils/api";

const TrendingCard: React.FC<TrendingCardProps> = ({
  index,
  title,
  keyword,
  pictureUrl,
}) => {
  const searchTerms = ["Italian", "Chinese", "Spanish", "Indian"];
  const [recipes, setRecipes] = useState([]);
  const searchTerm = searchTerms[index];
  const router = useRouter(); // Initialize useRouter

  const handleSearch = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    try {
      const recipes = await api.searchTrending(searchTerm, 1);
      setRecipes(recipes);
      console.log(recipes);
      router.push(`/search/${searchTerm}`);
    } catch (e) {
      console.log(e);
    }

    console.log("Search query:", searchTerm);
  };

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
    localStorage.setItem("searchTerm", searchTerm);
    //console.log("Recipes stored in localStorage:", recipes);
  }, [recipes, searchTerm]);

  return (
    <a className="trending__card cursor-pointer group" onClick={handleSearch}>
      <Image
        src={pictureUrl}
        alt="image of pasta"
        className="rounded-xl"
        width={220}
        height={220}
      />
      <h3 className="font-semibold text-sm sm:text-base pt-1 group-hover:underline underline-offset-4">
        {title}
      </h3>
      <p className="trending__card-time text-sm sm:text-base no-underline">
        50+ recipes
      </p>
    </a>
  );
};

export default TrendingCard;
