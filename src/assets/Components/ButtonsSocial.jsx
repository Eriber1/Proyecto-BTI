import "../../Styles/Boton.css";
import "../../Styles/ButtonHover.css"
import "../../Styles/Button1.css"
import { Contexto } from "../../Context/ButtonContext";

const ButtonsSocial = () => {
  const { buttonText, Buttons,TextColor,Bgcolor, } = Contexto();

const estilo = { backgroundColor: Bgcolor, color: TextColor }

  return (
    <>
      <div className="btn-group-vertical">
        {Buttons.map(index => (
          <div key={index}>
            <button className="m-2" style={estilo}>
              {buttonText}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ButtonsSocial;
