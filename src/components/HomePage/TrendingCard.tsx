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
  pictureUrl,
  searchTerms,
  paragraphStyles,
  h3Styles,
}) => {
  const [recipes, setRecipes] = useState([]);
  const searchTerm = searchTerms[index];
  const router = useRouter(); // Initialize useRouter

  //Asynchronous function that handles the search functionality
  const handleSearch = async () => {
    try {
      // Call the searchTrending function from the 'api' module with the provided params
      // Wait for the searchTrending function to complete and return the search results.
      const recipes = await api.searchTrending(searchTerm, 1);
      setRecipes(recipes);
      // Use the 'router' object to navigate to the search results page with the current 'searchTerm'.
      router.push(`/search/${searchTerm}`);
    } catch (e) {
      console.log(e);
    }
  };

  //useEffect hook used to update the local storage whenever the 'recipes' or 'searchTerm' state variables change.
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
    localStorage.setItem("searchTerm", searchTerm);
  }, [recipes, searchTerm]);

  return (
    <a
      className="trending__card cursor-pointer group w-4/5"
      onClick={handleSearch}
    >
      <Image
        src={pictureUrl}
        alt="image of pasta"
        className="rounded-xl w-full"
        width={800}
        height={800}
      />
      <h3 className={h3Styles}>{title}</h3>
      <p className={paragraphStyles}>50+ recipes</p>
    </a>
  );
};

export default TrendingCard;
