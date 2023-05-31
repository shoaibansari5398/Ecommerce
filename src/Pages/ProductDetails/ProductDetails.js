import "./ProductDetails.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function ProductDetails() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const { id } = useParams();

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
  } = selectedProduct;

  return (
    <div className="product-details-container">
      <div className="product-details">
        <img src={img} />
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
            <button className="">Add To CART</button>
            <button className="">add to wishlist</button>
          </div>
          <p className="product-details-category">Category: {category}</p>
        </div>
      </div>
    </div>
  );
}
