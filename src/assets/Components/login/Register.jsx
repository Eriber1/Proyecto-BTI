import { useAuth } from "../../../Context/AuthContext";
import ButtonsLoginsWith from "../ButtonsLoginsWith";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useState } from "react";

export function Register() {
  const navigate = useNavigate();
  const { loginWithMail } = useAuth();

  const [user, setuser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const AuthOnchange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // Verifica que las contraseñas coincidan
    if (user.password !== user.confirmPassword) {
      console.log("Las contraseñas no coinciden");
      return;
    }

    try {
      // Realiza la llamada para crear la cuenta
      await loginWithMail(user.email, user.password);
      navigate("/Home");
    } catch (error) {
      console.log("Error al crear la cuenta:", error);
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleLoginSubmit}>
          <div className="login__field" style={{ marginTop: "-75px" }}>
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

            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                onChange={AuthOnchange}
                type="password"
                name="confirmPassword"
                className="login__input"
                placeholder="Confirme su contraseña"
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

export default Register;

