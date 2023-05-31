import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ProductCard from "../../Components/ProductCard/ProductCard";

export default function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <>
      {cart?.map((product) => {
        return (
          <div>
            <ProductCard key={product.id} product={product} />
          </div>
        );
      })}
    </>
  );
}

{
  /* <div>
  <div className="product-details-card">
    <img src={img} />
    <div class="">
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
        <button className="">Add To CART</button>
        <button className="">add to wishlist</button>
      </div>
    </div>
  </div>
  <div className="product-details-summary">
    <h3>Product Details</h3>
  </div>
</div>; */
}
