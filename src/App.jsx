import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./assets/Components/Login";
import Home from "./assets/Components/Home";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Register from "./assets/Components/Register";
import Test from "./assets/Components/Test";
import { ButtonContextProvider } from "./Context/ButtonContext";
import ButtonsSocial from "./assets/Components/ButtonsSocial";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <ButtonContextProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Prueba" element={<Test />} />
            <Route path="/boton" element={<ButtonsSocial />} />
          </Routes>
        </ButtonContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
