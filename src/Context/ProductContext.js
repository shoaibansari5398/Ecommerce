import {createContext,useEffect,useReducer} from "react"
import axios from "axios";

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS": {
      return { ...state, products: action.payload };
    }
    case "SEARCH": {
      return {
        ...state,
        condition: { ...state.condition, search: action.payload },
      };
    }
    default:
  }
};


export const ProductContext = createContext();

export function ProductProvider({children}){

  const initialState = {
    products: [],
    condition: {
      search: "",
      price: null,
      categories: [],
      rating: null,
    },
  }

  const [state,productDispatch] = useReducer(productReducer,initialState)

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
            <ProductContext.Provider value={{productDispatch,state}}>
                {children}
            </ProductContext.Provider>
  )
}