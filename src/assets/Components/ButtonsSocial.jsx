import "../../Styles/Boton.css";
import { Contexto } from "../../Context/ButtonContext";
import DeleteIcon from "@mui/icons-material/Delete";

const ButtonsSocial = () => {
  const { buttonText, Buttons, DeleteButton } = Contexto();

  const handleDeleteButton = (index) => {
    DeleteButton(index);
  };

  return (
    <>
      <div className="btn-group-vertical">
        {Buttons.map(index => (
          <div key={index}>
            <button className="bn5 m-2">
              {buttonText}
            </button>
            <button onClick={() => handleDeleteButton(index)} key={`delete-${index}`}>
            <DeleteIcon />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ButtonsSocial;
