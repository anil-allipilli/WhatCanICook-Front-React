import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {  setIngredients } from "../redux/actions";

import "../css/SearchIngredientsInput.css"

export default (params) => {
    const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.ingredients);

    const searchHandler = (inputValue) => {
        let searchIngredients = ingredients.filter(ing => {
          if(ing.name.toLowerCase().includes(inputValue.toLowerCase())) {
              return true
          }
          return false
        })
        setValue(inputValue)
        dispatch(setIngredients(searchIngredients, "Search"))     
    }
    return <input 
    placeholder="Search Ingredients" 
    className="SearchIngs" 
    value={value} 
    onChange={(e) => searchHandler(e.target.value)} 
    />
    
}
