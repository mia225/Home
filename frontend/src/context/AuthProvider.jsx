import {createContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoadding] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("access");
        setIsAuthenticated(!!token);
        setIsLoadding(false);
         },[location]);
        return (
            <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, isLoading, setIsLoadding}}>
                {children}
            </AuthContext.Provider>
        )
    };
