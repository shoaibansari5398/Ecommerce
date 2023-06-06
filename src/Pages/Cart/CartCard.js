import "./CartCard.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { WishlistContext } from "../../Context/WishlistContext";
import { CartContext } from "../../Context/CartContext";

export default function CartCard({ product }) {
  const { wishlist, addToWishlistHandler } = useContext(WishlistContext);
  const { deleteCartHandler, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

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

  const productAvailableInWishlist = wishlist.some(
    (e) => e._id === product?._id
  );

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
        <div className="cart-quantity">
          <span>Quantity: </span>
          <button
            onClick={() =>
              qty <= 1 ? deleteCartHandler(_id) : decreaseQuantity(_id)
            }
          >
            -
          </button>
          <span>{qty}</span>
          <button onClick={() => increaseQuantity(_id)}>+</button>
        </div>
        <div>
          <button onClick={() => deleteCartHandler(_id)}>
            Remove From Cart
          </button>
          {productAvailableInWishlist ? (
            <NavLink to="/wishlist">
              <button className="btn-clicked">Go To Wishlist</button>
            </NavLink>
          ) : (
            <button onClick={() => addToWishlistHandler(product)}>
              Move to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
