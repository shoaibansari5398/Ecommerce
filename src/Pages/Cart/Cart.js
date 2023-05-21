import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

export default function Cart(){
    const {cart} = useContext(CartContext)
    return(
        <>
        {
            cart?.map((product)=>{
                const {name,author,price} = product
                return(
                                    <div key={product.id}>
                                        <p>{name}</p>
                                        <p>{author}</p>
                                        <p>${price}</p>
                                    </div>
                )
            })
        }
        </>
    )
}