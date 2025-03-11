import { createContext, useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }){




    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)



    return(
        <AuthContext.Provider value={ { isAuthenticated, setIsAuthenticated, username }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider