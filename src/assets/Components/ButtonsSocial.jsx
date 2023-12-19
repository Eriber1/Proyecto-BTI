import "../../Styles/Boton.css";
import "../../Styles/ButtonHover.css";
import "../../Styles/Button1.css";
import { Contexto } from "../../Context/ButtonContext";

const ButtonsSocial = () => {
  const { buttonText, Buttons, TextColor, Bgcolor, estilocss, Letterfont,socialURL} =
    Contexto();

  const estilo = {
    backgroundColor: Bgcolor,
    color: TextColor,
    fontFamily: Letterfont,
  };

  return (
    <>
      <div className="btn-group-vertical">
        {Buttons.map((index) => (
          <div key={index}>
            <a className={estilocss + " mt-2"} style={estilo} href={socialURL} target="_blank">
             {buttonText}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default ButtonsSocial;
