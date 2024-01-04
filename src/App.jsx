import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./assets/Components/Login";
import Home from "./assets/Components/Home";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Register from "./assets/Components/Register";
import { ButtonContextProvider } from "./Context/ButtonContext";
import ButtonsSocial from "./assets/Components/ButtonsSocial";
import Llogin2 from "./assets/Components/login/Login";
import Prueba from "./prueba/Prueba";

function App() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500">
      <AuthProvider>
        <ButtonContextProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Llogin2 />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Prueba" element={<Prueba />} />
            <Route path="/boton" element={<ButtonsSocial />} />
          </Routes>
        </ButtonContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
