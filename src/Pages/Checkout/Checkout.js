import CartDetails from "../Cart/CartDetails";
import "./Checkout.css";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import toastHandler from "../../Components/Notification/Toaster";

export default function Checkout() {
  const { cart, totalPrice, totalDiscount } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-address-container">
        <p>Shoaib</p>
        <p>Hiranandani Gardens Powai, Mumbai, Maharashtra</p>
        <p>Mumbai, Maharashtra</p>
        <p>1234567890</p>
      </div>
      <div className="checkout-summary-container">
        <h4>Order Details</h4>
        <p>
          <span>Total Price: </span>
          <span>{totalPrice}</span>
        </p>
        <NavLink to="/order">
          <button className="order-button">CHECKOUT</button>
        </NavLink>
      </div>
    </div>
  );
}
