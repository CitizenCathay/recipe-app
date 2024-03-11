import React from "react";
import { Props } from "../../utils/types";
import { useRouter } from "next/navigation";

const RecipeCard = ({ recipe, id }: Props) => {
  const storedSearchTerm = localStorage.getItem("searchTerm");
  const router = useRouter(); // Initialize useRouter
  const handleClick = () => {
    console.log({ id });
    console.log({ storedSearchTerm });
    // Navigate to the dynamic recipe page for the clicked recipe
    if (id && storedSearchTerm) {
      router.push(`/search/${storedSearchTerm}/${id}`);
    } else {
      console.error("Missing id or stored search term.");
    }
  };
  const summary = recipe.summary
    .replace(/<br\s*\/?>/gm, "")
    .replace(/<\/?b\s*\/?>/g, "") // Remove line break and bold tags
    .replace(/<\/?a\s*\/?>/g, ""); // Remove anchor tags

  const words = summary.split(" ");
  let lastWordIndex = Math.min(14, words.length - 1); // Ensure we don't exceed the number of words in the summary
  let lastWord = words[lastWordIndex]; // Get the 15th word or the last word if the summary is shorter

  if (lastWord) {
    lastWord = lastWord.replace(/[,.?]$/, ""); // Remove periods and commas from the last word
  }

  const truncatedSummary =
    words.slice(0, 14).join(" ") + (lastWord ? " " + lastWord : ""); // Limit summary to 15 words

  return (
    <div
      className="recipe__card cursor-pointer mb-10 sm:mb-8 w-80 sm:w-64 md:w-full rounded-lg mx-auto shadow-md group"
      onClick={handleClick}
    >
      <img
        src={recipe.image}
        alt="image of recipe"
        className="w-full rounded-t-lg"
      ></img>
      <h2 className="font-semibold text-lg px-4 pt-2 group-hover:underline underline-offset-4">
        {recipe.title}
      </h2>
      <p className="px-4 pb-2">
        {recipe.readyInMinutes} mins ·{" "}
        {(recipe.spoonacularScore / 20).toFixed(2)} ★
      </p>
      <p className="leading-5 px-4 pb-4">{truncatedSummary}...</p>
    </div>
  );
};

export default RecipeCard;
