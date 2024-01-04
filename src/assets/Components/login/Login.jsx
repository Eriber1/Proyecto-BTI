import ButtonsLoginsWith from '../ButtonsLoginsWith';
import './style.css';


const Llogin2 = () => {
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login">
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input 
			 type="email"
			 autoComplete="email"
			 required
			 className="login__input" 
			 placeholder="Correo electrónico" />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input type="password" className="login__input" placeholder="Contraseña" 
			   autoComplete="current-password"
			   required/>
            </div>
            <button className="button login__submit">
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
};

export default Llogin2;
