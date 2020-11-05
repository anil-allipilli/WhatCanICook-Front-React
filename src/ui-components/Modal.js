import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import BackDrop from "./BackDrop"
import "../css/Modal.css"



export default function Modal(props) {
    if (!props.spinner) { return (
        <>
        <BackDrop show={props.show} clicked={props.modalClosed} />
        <div 
        className="Modal" 
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            <FontAwesomeIcon className="MIcon"  icon="window-close" onClick={props.modalClosed} />
            {props.children}
        </div>
        </>
    ) }
    else {
        return (
            <>
            <BackDrop show={props.show}  />
            <div 
            className="Spinner"
            style={{
                display: props.show ? 'block' : 'none'
            }}
            >
                {props.children}
            </div>
            </>
        )
    }
  }