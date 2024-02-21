import React from "react";

const Searchbar = () => {
  return (
    <form className="bg-whitePrimary w-min flex pl-3 pr-1 py-1 rounded-md gap-2 shadow-xl">
      <input
        type="text"
        placeholder="Search for recipes..."
        className="outline-none text-sm sm:text-lg"
      />
      <button
        type="button"
        className="bg-primary px-6 py-1 sm:py-2 rounded-md shadow-xl"
      >
        Go
      </button>
    </form>
  );
};

export default Searchbar;
