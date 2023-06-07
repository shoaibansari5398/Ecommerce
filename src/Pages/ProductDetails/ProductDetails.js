import "./ProductDetails.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";
import { NavLink } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

export default function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const { id } = useParams();

  const { cart, addToCartHandler } = useContext(CartContext);
  const { wishlist, addToWishlistHandler } = useContext(WishlistContext);
  console.log("cart", cart);
  const productAvailableInCart = cart.some((e) => e._id === id);
  const productAvailableInWishlist = wishlist.some((e) => e._id === id);
  console.log(productAvailableInCart, "productAvailableInCart");
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        console.log(response);
        console.log(id);
        setSelectedProduct(() => response.data.product);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [id]);

  const { img, name, price, originalPrice, category } = selectedProduct;

  return selectedProduct.length === 0 ? (
    <Loader />
  ) : (
    <div className="product-details-container">
      <div className="product-details">
        <img src={img} alt="" />
        <div className="product-details-info">
          <h2>{name}</h2>
          <div className="price">
            <span>
              <p>${price}</p>
              <p className="originalPrice">${originalPrice}</p>
            </span>
            <p className="discount">
              <b>{Math.floor(100 - (price / originalPrice) * 100)}% OFF </b>
            </p>
          </div>
          <div className="btn">
            {productAvailableInCart ? (
              <NavLink to="/cart">
                <button className="btn-clicked">Go To Cart</button>
              </NavLink>
            ) : (
              <button onClick={() => addToCartHandler(selectedProduct)}>
                Add to Cart
              </button>
            )}

            {productAvailableInWishlist ? (
              <NavLink to="/wishlist">
                <button className="btn-clicked">Go To Wishlist</button>
              </NavLink>
            ) : (
              <button onClick={() => addToWishlistHandler(selectedProduct)}>
                Add to Wishlist
              </button>
            )}
          </div>
          <p className="product-details-category">Category: {category}</p>
        </div>
      </div>
    </div>
  );
}
