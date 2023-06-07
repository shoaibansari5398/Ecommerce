import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toastHandler from "../Components/Notification/Toaster";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const encodedToken = localStorage.getItem("token");

  const getWishlistData = async () => {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: encodedToken,
        },
      });
      setWishlist(response.data.wishlist);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getWishlistData);

  const addToWishlistHandler = async (product) => {
    const response = await axios.post(
      "/api/user/wishlist",
      {
        product,
      },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    setWishlist(() => response.data.wishlist);
    toastHandler("success", "Added to the Wishlist");
  };

  const removeFromWishlistHandler = async (id) => {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    setWishlist(response.data.wishlist);
    toastHandler("success", "Item removed successfully");
  };
  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlistHandler, removeFromWishlistHandler }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
