import { group_names, ingredients } from "../utils/data";
import {
  SELECT_INGREDIENT,
  SET_INGREDIENTS,
  REMOVE_INGREDIENT,
  GET_RECIPES,
  SELECT_RECIPE,
  setIngredients,
} from "./actions";

let ingredientsList = ingredients.filter((ingredient) => {
  return (
    ingredient.group.trim().toLowerCase() === "Vegetables".trim().toLowerCase()
  );
});

const vegetableIngredients = setIngredients(ingredientsList, "Vegetables").payload
  .ingredientsList;

const initialState = {
  groups: group_names,
  ingredients: ingredients,
  selectedGroup: group_names[0].id,
  groupIngredients: vegetableIngredients,
  selectedIngredients: [],
  recipes: [],
  selectedRecipe: {}
};
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS:
      return {
        ...state,
        groupIngredients: action.payload.ingredientsList,
        selectedGroup: action.payload.groupName,
      };

    case SELECT_INGREDIENT:
      let newSelectedIngredients = state.selectedIngredients;
      if (newSelectedIngredients.includes(action.payload)) return state;

      newSelectedIngredients.unshift(action.payload);
      return {
        ...state,
        selectedIngredients: newSelectedIngredients,
      };

    case REMOVE_INGREDIENT:
      let newSelectedIngredientsForRemove = state.selectedIngredients;
      const checkIngredient = (ingredient) => ingredient !== action.payload;
      newSelectedIngredientsForRemove = newSelectedIngredientsForRemove.filter(
        checkIngredient
      );
      return {
        ...state,
        selectedIngredients: newSelectedIngredientsForRemove,
      };
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      };
    case SELECT_RECIPE:

      return {
        ...state,
        selectedRecipe: action.payload
      };

    default:
      return state;
  }
};

export default reducers