export interface Recipe {
  id: number;
  title: string;
  image: string;
  summary: string;
  servings: number;
  cookingMinutes: number;
  preparationMinutes: number;
  readyInMinutes: number;
  cuisines: Array<string>;
  dishTypes: Array<string>;
  spoonacularScore: number;
  sourceName: string;
  sourceUrl: string;
  cheap: boolean;
  glutenFree: boolean;
  vegetarian: boolean;
  vegan: boolean;
  dairyFree: boolean;
  nutrition: {
    nutrients: {
      amount: string;
      name: string;
      unit: string;
    }[];
  };
  analyzedInstructions?: {
    name: string;
    steps: {
      number: number;
      step: string;
      length: {
        number: number;
        units: string;
      };
    }[];
  };
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
