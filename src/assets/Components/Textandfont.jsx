import React, { useState } from "react";
import { Contexto } from "../../Context/ButtonContext";
import "../../Styles/GoogleFonts.css"


//aqui mandamos a llamar las variables desdel otro componenete
const Textadnfond = () => {
  //defino las variables que me ayudaran a detectar los cambios en el textbox que se usara
  //para cambiar el texto a los botones
  const [Text, setText] = useState("Myboton");
  const [porfileURL, setPorfileURL] = useState("#");
  //sirve para indicar si la url es valida
  const [isValidUrl, setIsValidUrl] = useState(true);
  //se usa para validar que se este ingresando una url valida define los elementos a validar
  const urlRegex =
    /^(http|https):\/\/(www\.)?(facebook|twitter|instagram|linkedin)\.com(\/[^ "]+)?$/;

    const {setbuttonText,setLetterfont,Letterfont,setsocialURL} = Contexto();

  const hangleInputText = (event) => {
    const ChangeText = event.target.value
    setText(ChangeText);
    setbuttonText(ChangeText);
  };

  const hangleInputURl = (event) => {
    const value = event.target.value;
    setPorfileURL(value);

    // Validar la URL y actualizar el estado isValidUrl
    setIsValidUrl(urlRegex.test(value) || value === "");
    setsocialURL(value);
  };


  return (
    <>
      {/* boton que se usa para cambiar el texto del boton  */}
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-secondary bg-blue-400"
            type="button"
            id="button-addon1"
          >
            Texto
          </button>
        </div>
        <input
          value={Text}
          onChange={hangleInputText}
          type="text"
          className="form-control"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
      </div>

      {/* boton que se usa para agregar el link del perfil del usuario */}
      <div className="input-group mb-3 ">
        <div className="input-group-prepend  ">
          <button
            className="btn btn-outline-secondary bg-blue-400"
            type="button"
            id="button-addon1"
          >
            Link
          </button>
        </div>
        <input
          type="text"
          className={`form-control ${isValidUrl ? "" : "is-invalid"}`}
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          value={porfileURL}
          onChange={hangleInputURl}
        />
        {!isValidUrl && (
          <div className="invalid-feedback">
            Por favor, introduce una URL válida.
          </div>
        )}
      </div>

      {/* opciones para el tipo de letra */}
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle bg-blue-400"
          style={{fontFamily: Letterfont}}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {Letterfont}
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item" style={{fontFamily: "Arial"}} onClick={() => setLetterfont("Arial")}>
              Arial
            </button>
          </li>
          <li>
            <button className="dropdown-item" style={{fontFamily: "Impact"}} onClick={() => setLetterfont("Impact")}>
              Impact
            </button>
          </li>
          <li>
            <button className="dropdown-item" style={{fontFamily: "Times New Roman"}} onClick={() => setLetterfont("Times New Roman")}>
              Times New Roman
            </button>
          </li>
          <li>
            <button className="dropdown-item" style={{fontFamily: "Anton"}} onClick={() => setLetterfont("Anton")}>
            Anton
            </button>
          </li>
          <li>
            <button className="dropdown-item" style={{fontFamily: "Tangerine"}} onClick={() => setLetterfont("Tangerine")}>
            Tangerine
            </button>
          </li>
          <li>
            <button className="dropdown-item" style={{fontFamily: "Rubik Scribble"}} onClick={() => setLetterfont("Rubik Scribble")}>
            Tangerine
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Textadnfond;
