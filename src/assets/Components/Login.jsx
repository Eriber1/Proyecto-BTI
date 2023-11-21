import "bootstrap/dist/css/bootstrap.min.css";
import LoginIcon from "../icons/LoginICon";
import LoginGoogleICon from "../icons/LoginGoogleIcon";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginFacebookIcon from "../icons/LoginFacebookIcon";
import LoginMicrosoftIcon from "../icons/LoginMicrosoftIcon";
import LoginLinkedinIcon from "../icons/LoginLinkedinICon";

const Login = () => {
  const { loginWithGoogle,loginWithFacebook,loginWithMicrosoft } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    console.log(loginWithGoogle)
    navigate("/Home")
  };

  const handleFacebookleLogin = async () => {
    await loginWithFacebook();
    console.log(loginWithFacebook)
    navigate("/Home")
  };

  const handleMicrosoftleLogin = async () => {
    await loginWithMicrosoft();
    console.log(loginWithMicrosoft)
    navigate("/Home")
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Bienvenido
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="mt-2">
                <input
                  placeholder="Correo"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <input
                  placeholder="Contraseña"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=" text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <div className="mr-2 mt-1">
                  <LoginIcon />
                </div>
                Iniciar sesión
              </button>
            </div>
          </form>

          <div className="mt-4  text-center text-sm text-gray-500">
            <div className="ab lx ze awa awe awp">
              <span className="alo ark axv">O Continua Con</span>
            </div>
          </div>
          <div className="mt-4"></div>

          <div className="flex space-x-5 mt-2 text-center text-sm justify-center">
            <button
              className="bg-ligth-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-red"
              onClick={handleGoogleLogin}
            >
              <LoginGoogleICon />
            </button>

            <button className="bg-ligth-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-red"
            onClick={handleFacebookleLogin}
            >
              <LoginFacebookIcon />
            </button>

            <button className="bg-ligth-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-red"
            onClick={handleMicrosoftleLogin}
            >
              <LoginMicrosoftIcon />
            </button>

            <button className="bg-ligth-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-300 focus:outline-none focus:shadow-outline-red">
              <LoginLinkedinIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
