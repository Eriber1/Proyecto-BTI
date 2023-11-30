import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./assets/Components/Login";
import Home from "./assets/Components/Home";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Register from "./assets/Components/Register";

//para evitar llamar AuthProvider en cada elemento, solo se llama en el archivo que contendra a todos los componentes
function App() {
  return (
    <div className="">
    <AuthProvider>
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
    </div>
  );
}

export default App;
