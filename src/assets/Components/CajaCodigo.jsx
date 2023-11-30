import React, { useState } from "react";
import Button from "@mui/material/Button"; 
import CopyIcon from "../icons/CopyIcon";
import { Codigo1 } from "./Codigo";



const Cajacodigo = () => {
    
  const [codigo, setCodigo] = useState(Codigo1);

  const handleInputChange = (event) => {
    setCodigo(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codigo);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Texto copiado',
        showConfirmButton: false,
        timer: 1000
      })
  };

  return (
    <>
      <div style={{ width: "90%", margin: "auto" }}>
      <div className="text-left mr-8">
        <Button size="small" onClick={handleCopy}> <CopyIcon /> </Button>
      </div>
      
        <textarea
          value={codigo}
          onChange={handleInputChange}
          rows={10}
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};

export default Cajacodigo;
