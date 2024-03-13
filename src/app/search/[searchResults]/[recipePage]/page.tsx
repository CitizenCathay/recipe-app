"use client";
import React, { useState, useEffect } from "react";
import { Recipe } from "@/utils/types";

const RecipePage = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [sanitizedSummary, setSanitizedSummary] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the selected recipe object from localStorage
    const storedRecipeString = localStorage.getItem("selectedRecipe");
    if (storedRecipeString) {
      setSelectedRecipe(JSON.parse(storedRecipeString));
    }
  }, []); // Empty dependency array ensures this effect runs only once

  useEffect(() => {
    if (selectedRecipe) {
      // Remove <b>, <br>, and <a> tags along with their href attributes from the summary
      const summary = selectedRecipe.summary
        .replace(/<br\s*\/?>/gm, "")
        .replace(/<\/?b\s*\/?>/g, "") // Remove line break and bold tags
        .replace(/<\/?a\s*\/?>/g, "") // Remove anchor tags
        .replace(/Users who liked this recipe also liked.*$/gim, "")
        .replace(/Try\s+<a\s+href=".*$/gim, "")
        .replace(/<a\s+href=".*$/gim, "")
        .replace(
          /If you like this recipe, you might also like recipes such as.*$/gim,
          ""
        )
        .replace(
          /(?:If you like this recipe, take a look at these similar recipes:|Similar recipes ).*$/gim,
          ""
        );
      setSanitizedSummary(summary);
    }
  }, [selectedRecipe]);

  return (
    <div className="flex-col flex md:flex-row">
      <section className="mt-8 flex flex-col items-center md:pr-4">
        <img
          src={selectedRecipe?.image}
          width={500}
          alt="pasta"
          className="rounded-xl shadow-lg mb-4 sm:mb-8"
        />
        <div className="flex flex-col items-center sm:ml-4 mt-4 sm:mt-0 w-full pb-4 pt-4 border-y-2 border-gray-300">
          <h1 className="text-3xl font-bold border-b border-gray-300 text-center leading-tight p-1">
            {selectedRecipe?.title}
          </h1>
          <ul className="list-none p-0 mt-2">
            <li className="flex items-center">
              <span className="mr-2">Ready in:</span>
              <span>{selectedRecipe?.readyInMinutes} minutes</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">Cheap:</span>
              <span>{selectedRecipe?.cheap ? "Yes" : "No"}</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">Dairy Free:</span>
              <span>{selectedRecipe?.dairyFree ? "Yes" : "No"}</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">Gluten Free:</span>
              <span>{selectedRecipe?.glutenFree ? "Yes" : "No"}</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">Vegetarian:</span>
              <span>{selectedRecipe?.vegetarian ? "Yes" : "No"}</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">Vegan:</span>
              <span>{selectedRecipe?.vegan ? "Yes" : "No"}</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">Rating:</span>
              <span>
                {(selectedRecipe?.spoonacularScore
                  ? selectedRecipe.spoonacularScore / 20
                  : 0
                ).toFixed(2)}
                {"/5 "}★
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">Recipe from:</span>
              <a
                href={selectedRecipe?.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="underline"
              >
                {selectedRecipe?.sourceName}
              </a>
            </li>
          </ul>
        </div>
        <h3 className="font-semibold text-2xl mt-4">Recipe summary:</h3>
        <p className="px-8">{sanitizedSummary}</p>
        <section className="mt-8 flex flex-col items-center px-8">
          <h3 className="font-semibold text-2xl">Instructions: </h3>
          <ol className="list-decimal">
            {
              /* @ts-ignore */ (
                selectedRecipe?.analyzedInstructions?.[0]?.steps as {
                  number: number;
                  step: string;
                  length: { number: number; units: string };
                }[]
              )?.length > 0 ? (
                /* @ts-ignore */ (
                  selectedRecipe?.analyzedInstructions?.[0]?.steps as {
                    number: number;
                    step: string;
                    length: { number: number; units: string };
                  }[]
                ).map((step) => (
                  <li key={step.number} className="mt-2">
                    {step.step}
                  </li>
                ))
              ) : (
                <p className="text-2xl">
                  Instructions unavailable for this recipe
                </p>
              )
            }
          </ol>
        </section>
      </section>
      <section className="mt-8 flex flex-col items-center">
        <h3 className="font-semibold text-2xl">Nutritional information: </h3>
        <table>
          <tbody>
            {selectedRecipe?.nutrition?.nutrients.map((nutrient) => (
              <tr key={nutrient.name}>
                <td className="border px-4 py-2">{nutrient.name}</td>
                <td className="border px-4 py-2">{nutrient.amount}</td>
                <td className="border px-4 py-2">{nutrient.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default RecipePage;
