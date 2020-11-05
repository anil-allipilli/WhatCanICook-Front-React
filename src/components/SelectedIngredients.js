import React  from "react";
import {  useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { removeIngredient } from "../redux/actions";
import "../css/SelectedIngredients.css";


function SelectedIngredients(props) {
  const dispatch = useDispatch();

// eslint-disable-next-line
  const selectedIngredientsLength = useSelector(
    (state) => state.selectedIngredients.length,
  );
  const selectedIngredients = useSelector(
    (state) => state.selectedIngredients    
  );



  let selIngsList = selectedIngredients.map((ingred) => {
    return (
      <li
        className="SelectedIngredient"
        onClick={() => removeIngredientHandler(ingred)}
        key={ingred.id}
      >
        {ingred.name.trim()}
        <FontAwesomeIcon className="SFicon" icon="trash" />
      </li>
    );
  });

  const removeIngredientHandler = (ingredientItem) =>
    dispatch(removeIngredient(ingredientItem));
  return (
    <div >
      <ol className="SelectedIngredients">{selIngsList}</ol>
    </div>
  );
}

export default SelectedIngredients;
