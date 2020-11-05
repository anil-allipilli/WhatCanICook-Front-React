export const SET_INGREDIENTS = "SET_INGREDIENTS";
export const SELECT_INGREDIENT = "SELECT_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const GET_RECIPES = "GET_RECIPES";
export const SELECT_RECIPE = "SELECT_RECIPE";

export const setIngredients = (ingredientsList, groupName) => {

  return {
    type: SET_INGREDIENTS,
    payload: { ingredientsList, groupName },
  };
};

export const addIngredient = (ingredientItem) => {
  return {
    type: SELECT_INGREDIENT,
    payload: ingredientItem,
  };
};

export const removeIngredient = (ingredientName) => {
  return {
    type: REMOVE_INGREDIENT,
    payload: ingredientName,
  };
};

export const getRecipes = (recipes) => {
  return {
    type: GET_RECIPES,
    payload: recipes
  }
};

export const selectRecipe = (recipe) => {
  console.log(recipe)
  return {
    type: SELECT_RECIPE,
    payload: recipe
  }
};