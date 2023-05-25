import { useContext } from "react"
import ProductCard from "../../Components/ProductCard/ProductCard"
import { WishlistContext } from "../../Context/WishlistContext"

export default function Wishlist(){
    const {wishlist} = useContext(WishlistContext)
    return(
        <>
        {
            wishlist?.map((product)=>{
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