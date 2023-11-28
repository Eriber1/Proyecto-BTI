import { createContext, useContext } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth"; 
import { auth } from "../firebaseConfig";

//este archivo sirve para dar un contexto global de si el usuario tiene su secion iniciada o no
export const authcontext = createContext();
// el context permite crear un provedor de auth y debolver objetos

//para evitar estar importando el archivo del contexto en cada archivo creamos un hook en donde lo unico que tendremos que llamar es la variable useAuth
export const useAuth = () => {
  const context = useContext(authcontext);
  return context;
};

const loginWithGoogle = async () => {
  const GoogleProvider = new GoogleAuthProvider(); 
  try {
    const result = await signInWithPopup(auth, GoogleProvider);
    const user = result.user;
    const email = user.email;
    const username = user.displayName;
    console.log(email,username);
  } catch (error) {
    console.log(error);
  }
}; 

const loginWithFacebook = () => {
  const FacebookProvider = new FacebookAuthProvider();
  return signInWithPopup(auth, FacebookProvider);
};

const loginWithMicrosoft = () => {
  const Microsoftprovider = new OAuthProvider("microsoft.com");
  return signInWithPopup(auth, Microsoftprovider);
};

const loginWithX = () => {
  const Xprovider = new TwitterAuthProvider();
  return signInWithPopup(auth, Xprovider);
};

export function AuthProvider({ children }) {
  return (
    <authcontext.Provider
      value={{
        loginWithGoogle,
        loginWithFacebook,
        loginWithMicrosoft,
        loginWithX,
      }}
    >
      {
        //aca adentro iran los componentes como el login o el Home
        //todo lo que tenga este provider los elementos hijos podran acceder a el
        // en este caso children es el que tendra contexto y podra acceder a los componenetes
        // del padre en este caso authcontext.provider
      }
      {children}
    </authcontext.Provider>
  );
}
