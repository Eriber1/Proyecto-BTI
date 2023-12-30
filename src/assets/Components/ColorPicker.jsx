import { Contexto } from '../../Context/ButtonContext';

const ColorPicker = () => {

  const {setTextColor,TextColor,setBgcolor,Bgcolor} = Contexto();
    
  const handleColorChangeBG = (event) => {
    setBgcolor(event.target.value);
  };

  const handleColorChangeTX = (event) => {
    setTextColor(event.target.value);
  };
    
  
    return (
      <>
        <label htmlFor="BackgroundColor">Color del Fondo: </label>
        <input type="color" id="BackgroundColor" value={Bgcolor} onChange={handleColorChangeBG} style={{ width: '50px', height: '10px' }} />

        <label htmlFor="TextColor">Color del Texto: </label>
        <input type="color" id="TextColor" value={TextColor} onChange={handleColorChangeTX} style={{ width: '50px', height: '10px' }} />
      </>
    );
  };
  
  export default ColorPicker;
  