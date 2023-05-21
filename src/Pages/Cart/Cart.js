import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import ProductCard from "../../Components/ProductCard/ProductCard"

export default function Cart(){
    const {cart} = useContext(CartContext)
    return(
        <>
        {
            cart?.map((product)=>{
                return(
                         <div>
                            <ProductCard key={product.id} product={product}/>
                        </div>
                )
            })
        }
        </>
    )
}