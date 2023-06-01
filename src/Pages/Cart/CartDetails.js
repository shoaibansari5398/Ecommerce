import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { NavLink } from "react-router-dom";
import "./Cart.css";

export default function CartDetails() {
  const { cart, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-details">
      <h4>Cart Details</h4>
      <hr />
      {cart.map((product) => (
        <div className="selected-product" key={product.id}>
          <span>
            {product.name} ({product.qty})
          </span>
          <span>${product.price * product.qty}</span>
        </div>
      ))}

      {console.log(totalPrice)}

      <div className="cart-total-amount">
        <span>Total Amount</span>
        <span>${totalPrice}</span>
      </div>
      {/* <NavLink to="/checkout"> */}
      <button>PLACE ORDER</button>
      {/* </NavLink> */}
    </div>
  );
}
