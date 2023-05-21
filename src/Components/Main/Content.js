import { useContext } from "react";
import { ProductContext  } from "../../Context/ProductContext";
import { CartContext } from "../../Context/CartContext";
import ProductCard from "../ProductCard/ProductCard";
import "./Content.css"

export default function LandingPage(){
    const {productInitialState,productDispatch} = useContext(ProductContext)
    const {addToCartHandler} = useContext(CartContext)
    return(
            <div>
                <div className="container">
                {
                    productInitialState?.products?.map((product)=>{
                        return(
                            <div>
                                <ProductCard key={product.id} product={product}/>
                            </div>
                        )
                    })
                }
                </div>
                
            </div>
        )
}
