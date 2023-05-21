import "./ProductCard.css";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";


export default function ProductCard({product}){
    const {img,name,author,price,originalPrice,isBestSeller,category,rating}=product
    const {addToCartHandler} = useContext(CartContext)
    // const percentage = 
    return (
            <div className="card">
                <div className="product-card">
                    <img src={img} alt={name}/>
                    <h3>{name}</h3>
                    <span>
                    <p>{author}</p>
                    <p className="rating">{rating}</p>
                    </span>
                    <div className="price">
                    <span>
                    <p>${price}</p>
                    <p className="originalPrice">${originalPrice}</p>
                    </span>
                    <p className="discount">{Math.floor(100-(price/originalPrice)*100)}%</p>
                    </div>
                    <button onClick={()=>addToCartHandler(product)}>Add To Cart</button>
                </div>
            </div>
        )
}