import {createContext,useState,useEffect} from "react"

import axios from "axios";

export const PhoneContext = createContext();

export function PhoneProvider({children}){

    const [phones, setPhones] = useState([]);

    const getData = async () => {
        try {
          const serverData = await axios.get("/api/products");
          // console.log(serverData.data.products);
          setPhones(serverData.data.products);;
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => getData(),[]);
    
    return (
            <PhoneContext.Provider value={{phones}}>
                {children}
            </PhoneContext.Provider>
        )
}