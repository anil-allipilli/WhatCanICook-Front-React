import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { setIngredients } from "../redux/actions";
import { ingredients } from "../utils/data";
import useWindowDimensions from "../utils/windowDimensions"
import BackDrop from "../ui-components/BackDrop"
import "../css/NavBar.css";


function NavBar() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true)
  const groupNames = useSelector((state) => state.groups);
  const { width } = useWindowDimensions();

  const groupTab = groupNames.map((group) => {
    return (
      <button onClick={() => setIngredientsHandler(group.group)} key={group.id}>
        {group.group}
      </button>
    );
  });
  const setIngredientsHandler = (groupName) =>{
    setShow(!show)
    let ingredientsList = ingredients.filter((ingredient) => {
      return (
        ingredient.group.trim().toLowerCase() === groupName.trim().toLowerCase()
      );
    });
    dispatch(setIngredients(ingredientsList, groupName));
  }
    
  const sideBarHandler = () => {        
      setShow(!show) 
  }


  let navBar = <>
  <BackDrop show={!show} clicked={sideBarHandler} />
  <div className="NavBar" 
    style={{
      transform: show ? 'translateX(-350px)' : 'translateX(0)',
    }}
  >
    <FontAwesomeIcon className="BarIcon" icon="bars" onClick={sideBarHandler} />
    {groupTab}
  </div>
  <FontAwesomeIcon className="BarIcon" icon="bars" onClick={sideBarHandler} />
  </>

  if (width > 1600 ){
    navBar = <div className="NavBar">{groupTab}</div>
  } 


  return navBar;
}

export default NavBar;