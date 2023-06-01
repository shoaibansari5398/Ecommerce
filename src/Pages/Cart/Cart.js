import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
// import ProductCard from "../../Components/ProductCard/ProductCard";
import CartCard from "./CartCard";
import CartDetails from "./CartDetails";

export default function Cart() {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart-container">
      {cart?.map((product) => {
        return (
          <div>
            <CartCard key={product.id} product={product} />
          </div>
        );
      })}
      <CartDetails />
    </div>
  );
}
