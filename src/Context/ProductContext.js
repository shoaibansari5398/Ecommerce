import {createContext,useEffect,useReducer} from "react"
import axios from "axios";

const productReducer=(state,action)=>{
  switch (action.type) {
    case "SET_PRODUCTS": {
      return { ...state, products: action.payload };
    }
  }
}


export const ProductContext = createContext();

export function ProductProvider({children}){

  const initialState = {
    cart:[],wishlist:[],categories:[],products:[]
  }

  const [productInitialState,productDispatch] = useReducer(productReducer,initialState)

  const getData=async()=>{
    try{
      const res = await axios.get("/api/products");
      // console.log(res);
      if(res.status===200)
      {
        productDispatch({type:"SET_PRODUCTS",payload:res.data.products})
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getData()
  },[])
  

  return (
            <ProductContext.Provider value={{productDispatch,productInitialState}}>
                {children}
            </ProductContext.Provider>
  )
}