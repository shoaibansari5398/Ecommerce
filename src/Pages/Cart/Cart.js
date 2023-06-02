import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
// import ProductCard from "../../Components/ProductCard/ProductCard";
import CartCard from "./CartCard";
import CartDetails from "./CartDetails";

function displayOnCart() {}

export default function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.length < 1 ? (
        <h2>Your Cart is Empty. Please add items in your Cart!</h2>
      ) : (
        <div className="cart-container">
          <div className="cards">
            {cart?.map((product) => {
              return (
                <div>
                  <CartCard key={product.id} product={product} />
                </div>
              );
            })}
          </div>
          <CartDetails />
        </div>
      )}
    </div>
  );
}
