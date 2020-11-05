import React from "react";

import "../css/RecipeDetail.css"

function RecipeDetail(props) {
    if(props.recipe === null) return null
    let ingList = props.recipe.ingredients_list.split("****")
    let prepList = props.recipe.preparation_steps.split("****")

    const ingListItems = ingList.map((ing, i) => {
        if(ing.length !== 0) {
            return (
                <li className="ListItem" key={i} >{ing}</li>
            )
            }
            else {
                return null
            }
    })
    const prepListItems = prepList.map((prep, i) => {
        if(prep.length !== 0) {
        return (
            <li  className="ListItem" key={i} >{prep}</li>
        )
        }
        else {
            return null
        }
    })


  return (
      <div className="RecipeDetail">
         <h3 className="RecipeTitle"> {props.recipe.title}</h3>
         <div className="RecipeIngredients">
            <h4>Ingredients</h4>
            <ol >{ingListItems}</ol>
         </div>
        <div  className="Preparation">
            <h4>Preparation Steps</h4>
            <ol>{prepListItems}</ol>
        </div>

    </div>
  );
}

export default RecipeDetail;

