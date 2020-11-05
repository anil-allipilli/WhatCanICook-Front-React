import React from "react";
import { useSelector, useDispatch } from "react-redux";


import { addIngredient } from "../redux/actions";
import "../css/Ingredients.css";



function compare( a, b ) {
  if ( a.name > b.name ){
    return 1;
  }
  if ( a.name < b.name ){
    return -1;
  }
  return 0;
}
function GroupIngredients() {
  const dispatch = useDispatch();
  let groupIngredients = useSelector((state) => state.groupIngredients);
  let columns = Math.ceil(groupIngredients.length / 26);
  groupIngredients.sort(compare)
  let ings = [];
  for (let i = 0; i < columns; i++) {
    ings.push(groupIngredients.slice(i * 26, i * 26 + 26));
  }
  let itemsList;
  let ingsList = ings.map((ingBatch, i) => {
    itemsList = ingBatch.map((ingredient) => (
      <li
        className="Ingredient"
        onClick={() => selectIngredientHandler(ingredient)}
        key={ingredient.id}
      >
        {ingredient.name.trim()}

      </li>
    ));
    return (
      <div className="Batch" key={i}>
        {itemsList}
      </div>
    );
  });

  const selectIngredientHandler = (ingredientItem) => {    
    dispatch(addIngredient(ingredientItem));

  }


  return <div className="IngTab">
    <div className="Ingredients" >{ingsList}</div>
  </div>;
}

export default GroupIngredients;
