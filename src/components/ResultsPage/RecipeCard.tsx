import React from "react";
import { Recipe } from "../../utils/types";
import Image from "next/image";

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  const summary = recipe.summary
    .replace(/<br\s*\/?>/gm, "")
    .replace(/<\/?b\s*\/?>/g, ""); // Remove line break and bold tags
  const truncatedSummary = summary.split(" ").slice(0, 15).join(" "); // Limit summary to 15 words
  return (
    <div className="recipe__card mb-8 w-80 rounded-t-lg mx-auto sm:w-60 px-2">
      <img
        src={recipe.image}
        alt="image of recipe"
        className="w-auto rounded-t-lg"
      ></img>
      <h2 className="font-semibold">{recipe.title}</h2>
      <p className="leading-5">{truncatedSummary}...</p>
    </div>
  );
};

export default RecipeCard;
