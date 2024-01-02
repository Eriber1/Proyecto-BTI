import React, { createContext, useContext, useState, useEffect } from "react";

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
  const [buttonText, setbuttonText] = useState(localStorage.getItem('buttonText') || "Myboton");
  useEffect(() => {
    localStorage.setItem('buttonText', buttonText);
  }, [buttonText]);

  //arreglo de botones
  const [Buttons, setButtons] = useState(JSON.parse(localStorage.getItem('Buttons')) || [""]);
  useEffect(() => {
    localStorage.setItem('Buttons', JSON.stringify(Buttons));
  }, [Buttons]);

  //color del fondo del boton
  const [Bgcolor, setBgcolor] = useState(localStorage.getItem('Bgcolor') || "#000000"); // Estado para almacenar el color seleccionado
  useEffect(() => {
    localStorage.setItem('Bgcolor', Bgcolor);
  }, [Bgcolor]);

  //color del texto del boton
  const [TextColor, setTextColor] = useState(localStorage.getItem('TextColor') || "#FFFFFF");
  useEffect(() => {
    localStorage.setItem('TextColor', TextColor);
  }, [TextColor]);

  //para elegir los estilos
  const [estilocss, setestilocss] = useState(localStorage.getItem('estilocss') || "bn5")
  useEffect(() => {
    localStorage.setItem('estilocss', estilocss);
  }, [estilocss]);

  //estilos del tipo de letra 
  const [Letterfont,setLetterfont] = useState(localStorage.getItem('Letterfont') || "Arial");
  useEffect(() => {
    localStorage.setItem('Letterfont', Letterfont);
  }, [Letterfont]);

  //url para el boton
  const [socialURL,setsocialURL] = useState(localStorage.getItem('socialURL') || "#")
  useEffect(() => {
    localStorage.setItem('socialURL', socialURL);
  }, [socialURL]);

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
