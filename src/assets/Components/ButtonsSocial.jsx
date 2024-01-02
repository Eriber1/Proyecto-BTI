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

 const handleUrl = () => {
  console.log(socialURL)
  window.open(socialURL, "_blank");
 }

 return (
  <>
    <div className="d-flex justify-content-center align-items-center " 
    style={{ height: "100vh" }}>
      <div className="btn-group-vertical">
        {Buttons.map((index) => (
          <div key={index}>
            <button className={estilocss + " mt-2"} style={estilo} onClick={handleUrl}>
              {buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  </>
);

};

export default ButtonsSocial;
