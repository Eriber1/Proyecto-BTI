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
  const [buttonText, setbuttonText] = useState("Myboton");
  //arreglo de botones
  const [Buttons, setButtons] = useState([""]);
  //color del fondo del boton
  const [Bgcolor, setBgcolor] = useState("#000000"); // Estado para almacenar el color seleccionado
  //color del texto del boton
  const [TextColor, setTextColor] = useState("#FFFFFF");
  //para elegir los estilos
  const [estilocss, setestilocss] = useState("bn5")
  //estilos del tipo de letra 
  const [Letterfont,setLetterfont] = useState("Arial");
  //url para el boton
  const [socialURL,setsocialURL] = useState("#")

  //funcion para agregar un boton
  const addButton = (newButton) => {
    setButtons([...Buttons, newButton]);
  };

  return (
    <ButtonContext.Provider
      value={{
        buttonText,
        setbuttonText,
        Buttons,
        setButtons,
        Bgcolor,
        setBgcolor,
        TextColor,
        setTextColor,
        addButton,
        estilocss,
        setestilocss,
        Letterfont,
        setLetterfont,
        socialURL,
        setsocialURL
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
};
