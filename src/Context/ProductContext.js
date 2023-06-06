import { createContext, useEffect, useReducer } from "react";
import axios from "axios";

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS": {
      return { ...state, products: action.payload };
    }
    case "SET_CATEGORY": {
      return { ...state, categories: action.payload };
    }
    default:
      return state;
  }
};

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const initialState = {
    products: [],
    categories: [],
  };

  const [state, productDispatch] = useReducer(productReducer, initialState);

  const getData = async () => {
    try {
      const res = await axios.get("/api/products");
      if (res.status === 200) {
        productDispatch({ type: "SET_PRODUCTS", payload: res.data.products });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getCategories = async () => {
    try {
      const res = await axios.get("/api/categories");
      if (res.status === 200) {
        productDispatch({ type: "SET_CATEGORY", payload: res.data.categories });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  return (
    <ProductContext.Provider value={{ productDispatch, state, getCategories }}>
      {children}
    </ProductContext.Provider>
  );
}
