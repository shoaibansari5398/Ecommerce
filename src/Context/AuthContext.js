import { createContext,useEffect } from "react";

import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const userData = {
        "email": "adarshbalika@gmail.com",
        "password": "adarshbalika"
    }

    const getAuth = async () =>{
        try {
            const auth = await axios.post(`/api/auth/login`,userData)
            // console.log(auth.data.encodedToken) 
            localStorage.setItem("encodedToken",auth?.data?.encodedToken)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() =>getAuth(),[]);

    return (
            <AuthContext.Provider value={{}}>
                {children}
            </AuthContext.Provider>
    )
}