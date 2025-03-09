import { createContext, useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }){


    const [number, setNumber] = useState(0)

    const [isAuthenticated, setIsAuthenticated] = useState(false)




    return(
        <AuthContext.Provider value={ { number, isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider