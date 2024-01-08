import { useAuth } from "../../../Context/AuthContext";
import ButtonsLoginsWith from "../ButtonsLoginsWith";
import { useNavigate,Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();

  const { RloginWithMail } = useAuth();

  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const AuthOnchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  // Función para manejar cambios en los inputs
  // aca se puede dejar a si o destructurar la e para solo escirbir las variables que contienen esos datos por ejemplo poniendo

  // const AuthOnchange = ({target:{name, value}}) => {
  //   setuser({ ...user, [name]: value });
  // };

  // Función para manejar el envío del formulario
  const handleLoginSubmit = async (e) => {
    e.preventDefault(); //eviat recargar la pagina al enviar el formulario

    try {
      await RloginWithMail(user.email, user.password);
       navigate("/Home");
    } 
    catch (error) {
      console.log("Error al crear la cuenta:", error);
      // Maneja errores aquí, como mostrar un mensaje de error al usuario
    }
  };
  
  


  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleLoginSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                onChange={AuthOnchange}
                type="email"
                name="email"
                autoComplete="email"
                required
                className="login__input"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                onChange={AuthOnchange}
                type="password"
                name="password"
                className="login__input"
                placeholder="Contraseña"
                autoComplete="current-password"
                required
              />
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Iniciar sesión ahora</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div className="social-login">
            <h3>Iniciar sesión a través de</h3>
            <div className="social-icons">
              <ButtonsLoginsWith></ButtonsLoginsWith>
            </div>
            <Link to="/Register" className="btn btn-link">
            <p>Crear una cuenta</p>
          </Link>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
