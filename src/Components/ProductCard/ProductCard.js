import "./ProductCard.css";
import "boxicons";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";
import { useContext } from "react";

export default function ProductCard({ product }) {
  const {
    _id,
    img,
    name,
    author,
    price,
    originalPrice,
    isBestSeller,
    category,
    rating,
  } = product;
  const { cart, addToCartHandler } = useContext(CartContext);
  const { wishlist, addToWishlistHandler } = useContext(WishlistContext);

  const productAvailableInCart = cart.some((e) => e._id === _id);
  const productAvailableInWishlist = wishlist.some((e) => e._id === _id);

  return (
    <div className="card">
      <div className="product-card">
        <NavLink to={`/products/${_id}`}>
          <img src={img} alt={name} />
          <p className="book-title">{name}</p>
          <span>
            <p>{author}</p>
            <p className="rating">{rating}</p>
          </span>
          <div className="price">
            <span>
              <p>${price}</p>
              <p className="originalPrice">${originalPrice}</p>
            </span>
            <p className="discount">
              <b>{Math.floor(100 - (price / originalPrice) * 100)}% OFF </b>
            </p>
          </div>
        </NavLink>
        {productAvailableInCart ? (
          <NavLink to="/cart">
            <button>Go To Cart</button>
          </NavLink>
        ) : (
          <button onClick={() => addToCartHandler()}>Add to Cart</button>
        )}

        {productAvailableInWishlist ? (
          <NavLink to="/wishlist">
            <button>Go To Wishlist</button>
          </NavLink>
        ) : (
          <button onClick={() => addToWishlistHandler()}>
            Add to Wishlist
          </button>
        )}
        {
          // console.log(productAvailableInWishlist)
          console.log(productAvailableInCart)
        }
      </div>
    </div>
  );
}
