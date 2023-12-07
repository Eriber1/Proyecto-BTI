import React, { useState } from "react";


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


  const hangleInputText = (event) => {
    setText(event.target.value);
    // Llamar a la función para cambiar el texto del botón en menu
  };

  const hangleInputURl = (event) => {
    const value = event.target.value;
    setPorfileURL(value);
    console.log(value);

    // Validar la URL y actualizar el estado isValidUrl
    setIsValidUrl(urlRegex.test(value) || value === "");
  };

  //este es el del boton que se usa para cambiar las fuentes
  const [Fuente, setfuente] = useState("Arial");

  const hangleArial = () => {
    setfuente("Arial");
  };

  const hangleImpact = () => {
    setfuente("Impact");
  };

  const hangleTime = () => {
    setfuente("Time New Roman");
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
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {Fuente}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" onClick={hangleArial}>
              Arial
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={hangleImpact}>
              Impact
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={hangleTime}>
              Times New Roman
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Textadnfond;
