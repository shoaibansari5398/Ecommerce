import "./Wishlist.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { WishlistContext } from "../../Context/WishlistContext";
import { CartContext } from "../../Context/CartContext";

export default function WishlistCard({ product }) {
  const { wishlist, removeFromWishlistHandler } = useContext(WishlistContext);
  const { cart, addToCartHandler } = useContext(CartContext);

  const {
    _id,
    qty,
    img,
    name,
    author,
    price,
    originalPrice,
    isBestSeller,
    category,
    rating,
  } = product;

  const productAvailableInCart = cart.some((e) => e._id === product?._id);

  return (
    <div className="product-details-card">
      <img src={img} />
      <div class="details">
        <h3>{name}</h3>
        <div className="price">
          <span>
            <p>${price}</p>
            <p className="originalPrice">${originalPrice}</p>
          </span>
          <p className="discount">
            <b>{Math.floor(100 - (price / originalPrice) * 100)}% OFF </b>
          </p>
        </div>
        <div>
          <button onClick={() => removeFromWishlistHandler(_id)}>
            Remove From Wishlist
          </button>
          {productAvailableInCart ? (
            <NavLink to="/cart">
              <button className="btn-clicked">Go To Cart</button>
            </NavLink>
          ) : (
            <button onClick={() => addToCartHandler(product)}>
              Move to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
