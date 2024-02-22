"use client";

import React, { useState, useRef } from "react";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Search query:", searchQuery);
    if (inputRef.current) {
      inputRef.current.blur(); // Blurs the input element
    }
    // To do: implement further actions here, such as sending the query to an API, etc.
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
        value={searchQuery}
        onChange={handleInputChange}
        ref={inputRef} // Assigning ref to the input element
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
