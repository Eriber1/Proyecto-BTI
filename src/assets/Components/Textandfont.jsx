import React, { useState } from "react";


//aqui mandamos a llamar las variables desdel otro componenete
const Textadnfond = () => {
    

const [Fuente, setfuente] = useState("Arial");

const hangleArial = () =>{
    setfuente('Arial');
}

const hangleImpact = () =>{
    setfuente('Impact');
}

const hangleTime = () =>{
    setfuente('Time New Roman');
}
    
    return (
        <>
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
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>

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
              className="form-control"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
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
    )
}

export default Textadnfond