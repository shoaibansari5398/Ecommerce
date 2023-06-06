import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { ProductContext } from "../../Context/ProductContext";
import { FiltersContext } from "../../Context/FiltersContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { loginHandler } from "../../backend/controllers/AuthController";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const { state, productDispatch } = useContext(ProductContext);
  const { filterDispatch } = useContext(FiltersContext);
  const navigate = useNavigate();
  const { authState, logoutHandler } = useContext(AuthContext);

  useEffect(() => {
    filterDispatch({ type: "SEARCH", payload: searchText });
  }, [searchText, filterDispatch]);

  // useEffect(() => console.log("authState", authState), [authState]);s
  console.log(authState.isLoggedIn);
  return (
    <div className="navbar">
      <NavLink to="/" className="nav-direction">
        <div className="website-name">BookShelf</div>
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
          {authState?.isLoggedIn ? (
            <NavLink to="/login" className="nav-direction">
              <li className="logout-btn " onClick={logoutHandler}>
                Logout
              </li>
            </NavLink>
          ) : (
            <NavLink to="/login" className="nav-direction">
              <li className="login-btn">Login</li>
            </NavLink>
          )}
          <NavLink to="/wishlist" className="nav-direction">
            <li>Wishlist</li>
          </NavLink>
          <NavLink to="/cart" className="nav-direction">
            <li>Cart</li>
          </NavLink>
          <NavLink to="/account" className="nav-direction">
            <li>Account</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
