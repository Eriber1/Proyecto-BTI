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


  return (
    <>
      <div className="row">
        <div className="col-sm-8 mt-20">
          <div className=" mr-10 ml-11">
            <div className="card-body text-center">
              {/* agrego los botones que se pueden modificar */}
             <ButtonsSocial></ButtonsSocial>
            </div>
          </div>
        </div>

        <div className="col-sm-4 ">
          <div className="container-fluid items-center">
            <h1>Herramientas</h1>
            <Button
            className="m-2"
            onClick={handleaddButton}
              variant="contained"
              size="small"
              startIcon={<AddCircleIcon />}
            >
              Agregar
            </Button>
          </div>
          <div className="mr-10">
           <Menu /> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
