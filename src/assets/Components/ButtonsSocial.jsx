import "../../Styles/Boton.css";
import Textadnfond from "./Textandfont";
import { useState } from "react";

const ButtonsSocial = () =>{

const [buttonText, setButtonText] = useState("Myboton1");

const changeButtonText = (newText) => {
    setButtonText(newText);
  };


    return(
        <>
         {/* Pasar la función changeButtonText a Textadnfond */}
         <Textadnfond
          buttonText={buttonText}
          changeButtonText={changeButtonText}
        />
        <div className="btn-group-vertical">
        <button className="bn5">{buttonText}</button>
        </div>
        </> 
    )
}

export default ButtonsSocial