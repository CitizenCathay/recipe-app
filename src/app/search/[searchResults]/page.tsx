"use client";
import RecipeCard from "@/components/ResultsPage/RecipeCard";
import React, { useEffect, useState, useRef } from "react";
import { Recipe } from "../../../utils/types";
import * as api from "../../../utils/api";

const SearchResults = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [totalResults, setTotalResults] = useState(0); // Number of search results
  const [searchTerm, setSearchTerm] = useState<string>("");
  const pageNumber = useRef(1);

  useEffect(() => {
    // Retrieve the stored array from localStorage
    const storedRecipes = localStorage.getItem("recipes");
    const storedSearchTerm = localStorage.getItem("searchTerm");
    if (storedRecipes) {
      // Parse the JSON string back to an array
      const parsedRecipes = JSON.parse(storedRecipes);

      setRecipes(parsedRecipes.results);
      setTotalResults(parsedRecipes.totalResults);
      if (storedSearchTerm !== null) {
        setSearchTerm(storedSearchTerm);
      }
    }
  }, []); // Run this effect only once, when the component mounts

  const handleViewMore = async () => {
    const nextPage = pageNumber.current + 1;
    try {
      const nextRecipes = await api.searchRecipes(searchTerm, nextPage);
      setRecipes([...recipes, ...nextRecipes.results]);
      pageNumber.current = nextPage;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="mb-6 sm:mb-10">
        <h1 className="font-semiboldbold mt-6 text-xl md:text-2xl">
          {recipes == undefined
            ? `Showing results for " "`
            : `Showing ${totalResults} results for "${searchTerm}"`}
        </h1>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-12">
        {(recipes !== undefined ? recipes : []).map((recipe: Recipe, index) => (
          <RecipeCard key={recipe.id + index} id={recipe.id} recipe={recipe} />
        ))}
      </section>
      <section className="flex justify-center">
        <button
          className="bg-primary py-2 px-4 font-semibold shadow-md rounded-lg transition duration-300 transform hover:scale-110 active:scale-100 active:bg-secondary"
          onClick={handleViewMore}
        >
          VIEW MORE
        </button>
      </section>
    </>
  );
};

export default SearchResults;
