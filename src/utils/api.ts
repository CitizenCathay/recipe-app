export const searchRecipes = async (searchTerm: string, page: number) => {
  const baseUrl = new URL(
    "https://recipe-backend-wine.vercel.app/api/recipes/search"
  );
  baseUrl.searchParams.append("searchTerm", searchTerm);
  baseUrl.searchParams.append("page", String(page));

  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export const searchTrending = async (searchCuisine: string, page: number) => {
  const baseUrl = new URL(
    "https://recipe-backend-wine.vercel.app/api/recipes/search"
  );
  baseUrl.searchParams.append("searchTerm", searchCuisine);
  baseUrl.searchParams.append("page", String(page));

  const response = await fetch(baseUrl);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
