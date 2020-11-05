
import React from "react";
import "../css/BackDrop.css"

export default function BackDrop(props) {
    return props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
  };