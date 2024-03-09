"use client";
import RecipeCard from "@/components/ResultsPage/RecipeCard";
import React, { useEffect, useState } from "react";

const SearchResults = () => {
  const [recipes, setRecipes] = useState([]);
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
      <section className="mb-10">
        <h1 className="font-semiboldbold mt-6 text-2xl">
          Showing <span>{totalResults}</span> results for &quot;{searchTerm}
          &quot;
        </h1>
      </section>
      <section className="flex-wrap flex justify-between">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </section>
    </>
  );
};

export default SearchResults;
