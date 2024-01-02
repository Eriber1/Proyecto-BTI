import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Menu from "./Menu";
import ButtonsSocial from "./ButtonsSocial";
import { Contexto } from "../../Context/ButtonContext";

const Home = () => {

  const { addButton } = Contexto();

  const handleaddButton = () => {
    addButton();
  };

  const borrar = () => {
    localStorage.clear();
  };


  return (
    <>

      <div className="row">
        <div className="col-sm-8 mt-1">
        <button onClick={borrar}>borrar</button>
        <Button
            className="m-2 align-top"
            onClick={handleaddButton}
              variant="contained"
              size="small"
              startIcon={<AddCircleIcon />}
            >
              Agregar
            </Button>

          <div className=" mr-1 ml-11">
            <div className="card-body">
              {/* agrego los botones que se pueden modificar */}
             <ButtonsSocial></ButtonsSocial>
            </div>
          </div>
        </div>
        <div className="col-sm-4 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="container-fluid items-center">
            <label htmlFor="Herramientas" className="m-2">Herramientas</label>
            <Menu />
          </div>
          <div id="Herramientas">
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
