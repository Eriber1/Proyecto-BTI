import "../../Styles/Boton.css";
import { Contexto } from "../../Context/ButtonContext";

const ButtonsSocial = () => {
  const { buttonText, Buttons,TextColor,Bgcolor } = Contexto();

const estilo = { backgroundColor: Bgcolor, color: TextColor }

  return (
    <>
      <div className="btn-group-vertical">
        {Buttons.map(index => (
          <div key={index}>
            <button className="bn5 m-2" style={estilo}>
              {buttonText}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ButtonsSocial;
