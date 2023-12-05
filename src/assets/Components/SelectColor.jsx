import React, { useState } from 'react';

const SelectColor = () => {
    
  const [SelectBgcolor, setSelectBgcolor] = useState('#000000'); // Estado para almacenar el color seleccionado
  const [selectTextColor, setselectTextColor] = useState('#000000');

  const handleColorChangeBG = (event) => {
    setSelectBgcolor(event.target.value);
  };

  const handleColorChangeTX = (event) => {
    setselectTextColor(event.target.value);
  };
    
    return (
      <>
        <label htmlFor="BackgroundColor">Color del Fondo: </label>
        <input type="color" id="BackgroundColor" value={SelectBgcolor} onChange={handleColorChangeBG} style={{ width: '50px', height: '10px' }} />

        <label htmlFor="TextColor">Color del Texto: </label>
        <input type="color" id="TextColor" value={selectTextColor} onChange={handleColorChangeTX} style={{ width: '50px', height: '10px' }} />
      </>
    );
  };
  
  export default SelectColor;
  