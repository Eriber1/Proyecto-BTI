import Button from "@mui/material/Button"; 
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';



const Home = () => {
  return (
    <>
       <div className="row">
        <div className="col-sm-8 mt-10">
          <div className="card mr-10 ml-11">
            <div className="card-body btn-group-vertical">
            <button className="btn btn-primary mb-3">+ Facebook</button>
          <button className="btn btn-primary mb-3">+ X</button>
          <button className="btn btn-primary mb-3">+ Youtube</button>
          <button className="btn btn-primary mb-3">+ TikTok </button>
          <button className="btn btn-primary mb-3">+ Whatsapp</button>
          <button className="btn btn-danger mb-3">Eliminar</button>
            </div>
          </div>
        </div>
        
        <div className="col-sm-4 mt-6" >
          <div className="container ">
          <Button variant="contained" size="small" startIcon={<AddCircleIcon  />}>Agregar</Button>
          <Button className="m-3" variant="contained" color="error" size="small" startIcon ={<DeleteIcon />}>Eliminar</Button>
            </div>
        </div>
      </div>

        <hr className="border-danger border-2 opacity-100 mb-3 mt-3" />

        <div className="card">
            <p>
                Editor
            </p>
        </div>
    </>
  );
};

export default Home;
