import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Menu from "./Menu";
import Cajacodigo from "./CajaCodigo";
import ButtonsSocial from "./ButtonsSocial";


const Home = () => {


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
          <div className="container ">
            <p>Herramientas</p>
            <Button
              variant="contained"
              size="small"
              startIcon={<AddCircleIcon />}
            >
              Agregar
            </Button>
            <Button
              className="m-3"
              variant="contained"
              color="error"
              size="small"
              startIcon={<DeleteIcon />}
            >
              Eliminar
            </Button>
          </div>
          <div className="mr-10">
           <Menu /> 
          </div>
        </div>
      </div>

      <hr className="border-danger border-2 opacity-100 mb-3 mt-3" />

      <Cajacodigo />
    </>
  );
};

export default Home;
