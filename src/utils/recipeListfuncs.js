
//Get ingredient by given id
export function giveIngredient(id, ingredients) {
    for (let k = 0;k < ingredients.length;k++){
      if(id === ingredients[k].id) {
        return ingredients[k]
      }
    }
  }
  // function to sort the recipes by number of remaining ingredients
export function compare( a, b ) {
    if ( a.rems > b.rems ){
        return 1;
    }
    if ( a.rems < b.rems ){
        return -1;
    }
    return 0;
}
  
  // function that returns list of recipe objects by adding keys "remaining ingredients" and "number of remaining ingredients"
export default  function newRecipes(recps, selIngs, ingredients) {
    let newIngs = selIngs.map(ing => ing.id)
    let newRecipeList = recps.map((recipe) => {
        let remainingIngredients = []
        for(let i = 0;i<recipe.ingredients.length;i++) {  
            if(!newIngs.includes(recipe.ingredients[i])){
                let requiredIngredient = giveIngredient(recipe.ingredients[i], ingredients)
                remainingIngredients.push(requiredIngredient)
            }
        }
        return {
        ...recipe,
        remainingIngredients,
        rems: remainingIngredients.length
        }
    })
    newRecipeList.sort(compare)
    return newRecipeList
}