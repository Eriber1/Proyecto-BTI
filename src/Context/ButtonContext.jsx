import React, { createContext, useContext, useState } from "react";

// Crear el contexto
export const ButtonContext = createContext();

// Crear el componente de contexto
export const Contexto = () => {
  const context = useContext(ButtonContext);
  return context;
};

// Crear el proveedor de contexto
export const ButtonContextProvider = ({ children }) => {

//texto que tendra cada boton
  const [buttonText,setbuttonText] = useState("Myboton");

  //arreglo de botones
  const [Buttons, setButtons] = useState(['']);

  //funcion para agregar un boton
  const addButton = (newButton) => {
    setButtons([...Buttons, newButton]);
  }
  
  const DeleteButton = (index) => {
    const newsButtons = [...Buttons];
    newsButtons.splice(index, 1);
    setButtons(newsButtons);
  };


  return <ButtonContext.Provider value={{buttonText,setbuttonText,Buttons,setButtons,addButton,DeleteButton }}>{children}</ButtonContext.Provider>;
};
