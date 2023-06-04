import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { ProductContext } from "../../Context/ProductContext";
import { FiltersContext } from "../../Context/FiltersContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const { state, productDispatch } = useContext(ProductContext);
  const { filterDispatch } = useContext(FiltersContext);
  const navigate = useNavigate();

  useEffect(() => {
    filterDispatch({ type: "SEARCH", payload: searchText });
  }, [searchText, filterDispatch]);

  return (
    <div className="navbar">
      <NavLink to="/" className="nav-direction">
        <div>Ecomm</div>
      </NavLink>
      <div>
        <div>
          <input
            className="search-input"
            placeholder="Search"
            type="search"
            name="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              e.target.value.trim() !== "" && navigate("/products");
            }}
          />
        </div>
      </div>
      <div className="nav-features">
        <ul className="nav-links">
          <NavLink to="/login" className="nav-direction">
            <li className="login-btn">Login</li>
          </NavLink>
          <NavLink to="/wishlist" className="nav-direction">
            <li>Wishlist</li>
          </NavLink>
          <NavLink to="/cart" className="nav-direction">
            <li>Cart</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
