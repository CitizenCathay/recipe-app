"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import * as api from "../../utils/api";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [recipes, setRecipes] = useState([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter(); // Initialize useRouter

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const recipes = await api.searchRecipes(searchTerm, 1);
      setRecipes(recipes);
      console.log(recipes);

      router.push(`/search/${searchTerm}`);
    } catch (e) {
      console.log(e);
    }

    console.log("Search query:", searchTerm);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <form
      className="bg-whitePrimary w-min flex pl-3 pr-1 py-1 rounded-md gap-2 shadow-xl"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        placeholder="Search for recipes..."
        className="outline-none text-sm sm:text-lg"
        value={searchTerm}
        onChange={handleInputChange}
        ref={inputRef} // Assigning ref to the input element
        id="searchInput"
        name="searchInput"
        required
      />
      <button
        type="submit"
        className="bg-primary px-6 py-1 sm:py-2 rounded-md shadow-xl font-semibold active:bg-secondary"
      >
        Go
      </button>
    </form>
  );
};

export default Searchbar;
