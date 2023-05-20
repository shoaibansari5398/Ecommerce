import { useContext } from "react";
import { PhoneContext  } from "../Context/PhoneContext";

export default function LandingPage(){
    const {phones} = useContext(PhoneContext)
    return(
            <div>
                {
                    phones.map((phone)=>{
                        const {id,brand,model,color,storage,price} = phone
                        return(
                            <div key={id}>
                                <h2>{brand}</h2>
                                <p>Author: {model}</p>
                                <p>Category: {color}</p>
                                <p>Category: {storage}</p>
                                <p>Category: {price}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
}
