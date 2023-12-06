import "../../Styles/Boton.css";
import Menu from "./Menu";
import { useState } from "react";

const ButtonsSocial = () =>{

    const changeButtonText1 = (newText) => {
        setButtonText(newText);
      };


    const [buttonText, setButtonText] = useState("Myboton");

    return(
        <>
        <div className="btn-group-vertical">
        <button className="bn5">{buttonText}</button>
        </div>
        </> 
    )
}

export default ButtonsSocial