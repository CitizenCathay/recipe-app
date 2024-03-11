export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  summary: string;
  servings: number;
  readyInMinutes: number;
  spoonacularScore: number;
}

export interface TrendingCardProps {
  index: number;
  keyword: string;
  title: string;
  pictureUrl: string;
}

export interface Props {
  recipe: Recipe;
  id: number;
}
