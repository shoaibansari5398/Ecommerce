import { createContext, useState,useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();


export function CartProvider({ children }){

    const [cart,setCart] = useState([]);

    const encodedToken = localStorage.getItem('encodedToken');

    const getCartData = async () =>{
        try {
            const res = await axios.get("/api/user/cart", {
            headers: {
              authorization: encodedToken,
            },
          });
          console.log(res.data.cart);

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {getCartData()},[]);


    const addToCartHandler=async (product) =>{
        // console.log(product)
        try {
            const res = await axios.post(`/api/user/cart`,{product},{headers:{authorization:encodedToken,},})
            setCart(res.data.cart)
        } catch (error) {
            console.error(error);
        }
    }

    const deleteCartHandler = async (id) => {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    setCart(response.data.cart);
  };

    return(
        <CartContext.Provider value={{addToCartHandler,cart,deleteCartHandler}}>
            {children}
        </CartContext.Provider>
    )
}