import React, {useState} from "react";
import { useSelector,useDispatch } from "react-redux";


import api from "../utils/axios"
import "../css/GetRecipesTab.css";
import { getRecipes } from "../redux/actions";

import Modal from "../ui-components/Modal"
import Spinner from "../utils/spinner.gif"

function GetRecipesTab(props) {
  const selectedIngredients = useSelector((state) => state.selectedIngredients);
  const [value, setValue] = useState("");
  const [getting, setGetting] = useState(false);

  const dispatch = useDispatch();

  const getRecipeHandler = async () => {
    setGetting(true)
    if(selectedIngredients.length === 0) return
    if(value === "") {
      setValue(4)
    }
    let queryString = selectedIngredients[0].id;
    for (let i = 1; i < selectedIngredients.length; i++) {
      queryString = queryString + "-" + selectedIngredients[i].id;
    }

    const fullQueryString = `recipes/?query_string=${queryString}&num=${value}`
    try {
      const res = await api.get(fullQueryString);  
      dispatch(getRecipes(res.data.results));
      setGetting(false)
      props.goToRecipe()
    } catch (err) {
      setGetting(false)

      console.log(err)
    }      
  }

  return (
    <div className="GetTab">
      <Modal show={getting} spinner={true} >
        <img src={Spinner} alt="Logo" />
      </Modal>
      <input
        title="Select Minimum  number of Ingredients you want the Recipes to have"
        className="NumIngsSelect"
        min="1"
        placeholder="Select Min num of Ingredients for Recipes"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)} 
      />
      <button onClick={getRecipeHandler} className="GetRecipesButton">
        Get Recipes
      </button>

    </div>
  );
}

export default GetRecipesTab;
