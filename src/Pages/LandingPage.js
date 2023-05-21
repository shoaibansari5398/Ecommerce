import { useContext } from "react";
import { ProductContext  } from "../Context/ProductContext";
import { CartContext } from "../Context/CartContext";

export default function LandingPage(){
    const {productInitialState,productDispatch} = useContext(ProductContext)
    const {addToCartHandler} = useContext(CartContext)
    return(
            <div>
                {
                    productInitialState?.products?.map((product)=>{
                        const {_id,name,author,isBestSeller,category,price,originalPrice,rating} = product
                        return(
                            <div key={_id}>
                                <h2>{name}</h2>
                                <p>Author: {author}</p>
                                <p>Category: {category}</p>
                                <p>Price{price}</p>
                                <p>Original Price: {originalPrice}</p>
                                <button onClick={()=>addToCartHandler(product)}>Add To Cart</button>
                            </div>
                        )
                    })
                }
                
            </div>
        )
}
