import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./assets/Components/Home";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import { ButtonContextProvider } from "./Context/ButtonContext";
import ButtonsSocial from "./assets/Components/ButtonsSocial";
import { Login } from "../src/assets/Components/login/Login";
import Register from "./assets/Components/login/Register";

function App() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500">
      <AuthProvider>
        <ButtonContextProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/boton" element={<ButtonsSocial />} />
          </Routes>
        </ButtonContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
