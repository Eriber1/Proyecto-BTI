import LoginFacebookIcon from "../icons/LoginFacebookIcon";
import LoginMicrosoftIcon from "../icons/LoginMicrosoftIcon";
import LoginXIcon from "../icons/LoginXIcon";
import LoginGoogleICon from "../icons/LoginGoogleIcon";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate} from "react-router-dom";

//este archivo contiene los botones para hacer login con las distintas plataformas

const ButtonsLoginsWith = () => {

    {/*de la variable useauth importamos los logins que vienen del archivo AuthContext*/}
    const { loginWithGoogle, loginWithFacebook, loginWithMicrosoft, loginWithX } = useAuth();
    const navigate = useNavigate();
  
    const handleGoogleLogin = async () => {
      await loginWithGoogle();
      navigate("/Home");
    };
  
    const handleFacebookleLogin = async () => {
      await loginWithFacebook();
      console.log(loginWithFacebook);
      navigate("/Home");
    };
  
    const handleMicrosoftleLogin = async () => {
      await loginWithMicrosoft();
      console.log(loginWithMicrosoft);
      navigate("/Home");
    };
  
    const handleXLogin = async () => {
      await loginWithX();
      console.log(loginWithX);
      navigate("/Home");
    };

  return (
    <>
      <button
        className="py-2 px-4 rounded-md shadow-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-red"
        onClick={handleGoogleLogin}
      >
        <LoginGoogleICon />
      </button>

      <button
        className=" py-2 px-4 rounded-md shadow-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-red"
        onClick={handleFacebookleLogin}
      >
        <LoginFacebookIcon />
      </button>

      <button
        className="py-2 px-4 rounded-md shadow-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-red"
        onClick={handleMicrosoftleLogin}
      >
        <LoginMicrosoftIcon />
      </button>

      <button
        className=" py-2 px-4 rounded-md shadow-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-red"
        onClick={handleXLogin}
      >
        <LoginXIcon />
      </button>
    </>
  );
};
export default ButtonsLoginsWith;
