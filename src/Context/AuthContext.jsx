// Importa las funciones y clases necesarias de Firebase para la autenticación
import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth"; 
import { auth } from "../firebaseConfig";  // Importa el objeto 'auth' configurado previamente del archivo de fire base


// Crea un contexto para el estado de autenticación global
export const authcontext = createContext();

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => {
  const context = useContext(authcontext);
  return context;
};

// Funciones para iniciar sesión con diferentes proveedores
const loginWithMail = (email,Password) => {  //incio de secion con correo y clave
createUserWithEmailAndPassword(auth, email, Password)
}

const RloginWithMail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
}

const loginWithGoogle = async () => {
  const GoogleProvider = new GoogleAuthProvider(); // Configura el proveedor de Google
  try {
    const result = await signInWithPopup(auth, GoogleProvider);
    const user = result.user;
    const email = user.email;
    const username = user.displayName;
    console.log(email, username);
  } catch (error) {
    console.log(error);
  }
}; 

const loginWithFacebook = () => {
  const FacebookProvider = new FacebookAuthProvider(); // Configura el proveedor de Facebook
  return signInWithPopup(auth, FacebookProvider);
};

const loginWithMicrosoft = () => {
  const Microsoftprovider = new OAuthProvider("microsoft.com"); // Configura el proveedor de Microsoft
  return signInWithPopup(auth, Microsoftprovider);
};

const loginWithX = () => {
  const Xprovider = new TwitterAuthProvider(); // Configura el proveedor de Twitter
  return signInWithPopup(auth, Xprovider);
};

// Componente proveedor de autenticación que envuelve la aplicación y proporciona el contexto
export function AuthProvider({ children }) {
  return (
    <authcontext.Provider
      value={{    // funciones que son exportadas al contexto para que todos puedan verlas
        loginWithMail,
        RloginWithMail,
        loginWithGoogle,
        loginWithFacebook,
        loginWithMicrosoft,
        loginWithX,
      }}
    >
      {children} {/* Renderiza los componentes hijos (login, home, etc.) */}
    </authcontext.Provider>
  );
}
