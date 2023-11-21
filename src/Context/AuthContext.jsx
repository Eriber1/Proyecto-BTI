import { createContext, useContext } from "react";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";

//este archivo sirve para dar un contexto global de si el usuario tiene su secion iniciada o no
export const authcontext = createContext();
// el context permite crear un provedor de auth y debolver objetos


//para evitar estar importando el archivo del contexto en cada archivo creamos un hook en donde lo unico que tendremos que llamar es la variable useAuth
export const useAuth = () => {
    const context = useContext(authcontext)
    return (context)
}

const loginWithGoogle = () => {
    const GoogleProvider = new GoogleAuthProvider();
return (signInWithPopup(auth, GoogleProvider))
}

export function AuthProvider({children}){
    

    return(
        <authcontext.Provider value={{loginWithGoogle}}>
        {   //aca adentro iran los componentes como el login o el Home
            //todo lo que tenga este provider los elementos hijos podran acceder a el
            // en este caso children es el que tendra contexto y podra acceder a los componenetes
            // del padre en este caso authcontext.provider
        }
            {children}

        </authcontext.Provider>
    )
}