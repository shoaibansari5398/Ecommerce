import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toastHandler from "../Components/Notification/Toaster";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const [totalprice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  const encodedToken = localStorage.getItem("encodedToken");

  const updateTotalPrice = (cart) => {
    setTotalPrice(() =>
      cart.reduce((acc, curr) => {
        return +(curr.price * curr.qty) + acc;
      }, 0)
    );
  };

  const getCartData = async () => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: encodedToken,
        },
      });
      console.log(response.data.cart);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCartData();
  }, []);

  const addToCartHandler = async (product) => {
    try {
      const response = await axios.post(
        `/api/user/cart`,
        { product },
        { headers: { authorization: encodedToken } }
      );
      setCart(() => response.data.cart);
      // console.log(response.data.cart);
      updateTotalPrice(response.data.cart);
      toastHandler("success", "Added to the Cart");
      // console.log(totalprice);
    } catch (error) {
      console.error(error);
    }
  };
  {
    // console.log(totalprice);
  }
  const deleteCartHandler = async (id) => {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    setCart(response.data.cart);
    toastHandler("success", "Item removed successfully");
    // updateTotalPrice(response.data.cart);
  };

  const increaseQuantity = async (id) => {
    try {
      const response = await axios.post(
        "/api/user/cart/" + id,
        {
          action: {
            type: "increment",
          },
        },
        {
          headers: { authorization: encodedToken },
        }
      );
      setCart(response.data.cart);
      // updateTotalPrice(response.data.cart);
    } catch (e) {
      console.error(e);
    }
  };
  const decreaseQuantity = async (id) => {
    try {
      const response = await axios.post(
        "/api/user/cart/" + id,
        {
          action: {
            type: "decrement",
          },
        },
        {
          headers: { authorization: encodedToken },
        }
      );
      setCart(response.data.cart);
      // console.log(totalprice);
      // updateTotalPrice(response.data.cart);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCartHandler,
        cart,
        deleteCartHandler,
        increaseQuantity,
        decreaseQuantity,
        totalprice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
