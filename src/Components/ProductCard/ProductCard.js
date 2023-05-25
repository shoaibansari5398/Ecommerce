import "./ProductCard.css";
import 'boxicons'
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";
import { useContext } from "react";


export default function ProductCard({product}){
    const {_id,img,name,author,price,originalPrice,isBestSeller,category,rating}=product
    const {cart,addToCartHandler} = useContext(CartContext)
    const {wishlist,addToWishlistHandler} = useContext(WishlistContext)

    const productAvailableInCart = cart.some((e) => e._id ===_id)
    const productAvailableInWishlist = wishlist.some((e) => e._id === _id) 

    return (
            <div className="card">
                <div className="product-card">
                    <img src={img} alt={name}/>
                    <h3>{name}</h3>
                    <span>
                    <p>{author}</p>
                    <p className="rating">{rating}
                    </p>
                    </span>
                    <div className="price">
                    <span>
                    <p>${price}</p>
                    <p className="originalPrice">${originalPrice}</p>
                    </span>
                    <p className="discount"><b>{Math.floor(100-(price/originalPrice)*100)}% OFF </b></p>
                    </div>
                    {/* {console.log(productAvailableInCart)} */}
                
                {
                    productAvailableInCart? (
                        <NavLink to="/cart">
                            <button>Go To Cart</button>
                        </NavLink>
                    ) : (
                        <button onClick={()=>addToCartHandler()}>Add to Cart</button>
                    )
                }

                {
                    productAvailableInWishlist ? (
                        <NavLink to="/wishlist">
                            <button>Go To Wishlist</button>
                        </NavLink>
                    ) : (
                        <button onClick={()=>addToWishlistHandler()}>Add to Wishlist</button>
                    )
                }
                </div>
            </div>
        )
}