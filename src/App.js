import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";

import './css/App.css';
import Navbar from "./components/NavBar"
import SearchIngredientsInput from "./components/SearchIngredientsInput"
import GroupIngredients from "./components/Ingredients"
import GetRecipesTab from "./components/GetRecipesTab"
import SelectedIngredients from "./components/SelectedIngredients"
import RecipesList from "./components/RecipesList"

library.add(faTrash,  faBars, faWindowClose);

function App() {
  const el = useRef(null);
  const goToRecipeListHandler = () => {    
    el.current.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <div className="App">
      <div className="Nav">
        <Navbar/>        
      </div>
      <div className="Sii">
        <SearchIngredientsInput />        
      </div>
      <div className="Group">
        <GroupIngredients/>
      </div>
      <div className="GetRecipeTab" >
        <GetRecipesTab goToRecipe={goToRecipeListHandler} />
      </div>
      <div className="Select">
        <SelectedIngredients/>
      </div>
      <div  className="Recipes"><RecipesList ref={el} /></div>   
    </div>
  );
}

export default App;
