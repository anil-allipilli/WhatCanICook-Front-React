import React, {useState,  forwardRef}  from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectRecipe } from "../redux/actions";


import api from "../utils/axios"
import RecipeDetail from "./RecipeDetail"
import Modal from "../ui-components/Modal"

import newRecipes from "../utils/recipeListfuncs"
import "../css/RecipesList.css"


const RecipesList = forwardRef((props, ref) => {
  console.log(ref)

  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const selectedIngredients = useSelector((state) => state.selectedIngredients);
  const ingredients = useSelector((state) => state.ingredients);
  const [recipe, setRecipe] = useState(null);
  const selectRecipeHandler = async (recipe) => {
    let queryString = `recipes/${recipe}/`
    try {
        const res = await api.get(queryString); 
        setRecipe(res.data)
    } catch (err) {
        console.log(err)
    }   
    dispatch(selectRecipe(recipe));
  }
  const backToListHandler = () => {
    setRecipe(null)
  }
  
  let newRecipesList  = newRecipes(recipes, selectedIngredients, ingredients) 
  let recipesList = newRecipesList.map((recipe) => {
    let title = recipe.title.trim()
    let remainingIngs = recipe.remainingIngredients.map(ing => <p key={ing.id}>{ing.name }</p>)
    return (
      <div
        className="Recipe"
        key={recipe.id}
        onClick={() => selectRecipeHandler(recipe.id)}
      >
        <div className="Title">{title}</div>
        <div className="Subtitle">{recipe.rems} more ingredients required</div>
        <div className="Ings">{remainingIngs}</div>
      </div>
    );
  });

  return (
    <>
      <Modal show={recipe} modalClosed={backToListHandler}>
        <RecipeDetail recipe={recipe} />
      </Modal>
      <div ref={ref} className="RecipesList">{recipesList}</div>
    </>
  );
})

export default RecipesList;