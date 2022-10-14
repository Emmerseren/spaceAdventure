import { useState, createContext } from "react";
export const LoginContext = createContext();
const LoginContextProvider = ( props ) => {
    // USER state - rummer data hvis en bruger er logget ind
    // --------------------------------------------------------
    const [ user, setUser ] = useState()
    // const [ user, setUser ] = useState()

    // Login-funktion (matcher brugernavn og password)
    // --------------------------------------------------------
    let signIn = ( brugernavn, adgangskode ) => {
        if ( brugernavn === "admin" && adgangskode === "123456" ) {
            setUser( brugernavn ); // = logget ind
        } else {
            setUser( null );       // = "logget ud"
        }
    }

    // Logud-funktion 
    // --------------------------------------------------------
    let signOut = () => {
        setUser(null);
    }

    // Return - det der udbydes 
    return (
        <LoginContext.Provider value={ { user, signIn, signOut } }>
            { props.children }
        </LoginContext.Provider>
    )
}
export default LoginContextProvider;