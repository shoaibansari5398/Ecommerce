import { useContext } from "react";
import { ProductContext  } from "../../Context/ProductContext";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Products.css"


export default function Products(){
    const {state} = useContext(ProductContext)

    return (
            <div className="container">
                {
                    state?.products?.map((product)=>{
                        return(
                            <div>
                                <ProductCard key={product.id} product={product}/>
                            </div>
                        )
                    })
                }
            </div>
        )
}