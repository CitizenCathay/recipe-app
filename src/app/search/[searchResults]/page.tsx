import React from "react";

interface Props {
  searchTerm: string;
}

const SearchTerm: React.FC<Props> = ({ searchTerm }) => {
  return (
    <>
      <h1 className="font-semiboldbold mt-6 text-2xl">
        Showing results for &quot;Cheese Pies&quot;:
      </h1>
    </>
  );
};

export default SearchTerm;
