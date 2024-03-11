"use client";
import RecipeCard from "@/components/ResultsPage/RecipeCard";
import React, { useEffect, useState } from "react";
import { Recipe } from "../../../utils/types";

const SearchResults = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [totalResults, setTotalResults] = useState(0); // Initialize totalResults
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  console.log("Recipes stored in localStorage:", recipes);

  return (
    <>
      <section className="mb-6 sm:mb-10">
        <h1 className="font-semiboldbold mt-6 text-xl md:text-2xl">
          Showing <span>{totalResults}</span> results for &quot;{searchTerm}
          &quot;
        </h1>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-12">
        {recipes.map((recipe, index) => (
          <RecipeCard key={recipe.id} id={recipe.id} recipe={recipe} />
        ))}
      </section>
    </>
  );
};

export default SearchResults;
