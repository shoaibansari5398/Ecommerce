import { NavLink } from "react-router-dom";
import { useState,useEffect,useContext } from "react";
import "./Navbar.css"
import { ProductContext } from "../../Context/ProductContext";
export default function Header(){

    const [searchText, setSearchText] = useState("");
    const {state,productDispatch} = useContext(ProductContext);
    
    

    return(
            <div className="navbar">
                <NavLink to="/" className="nav-direction">
                    <div>Ecomm</div>
                </NavLink> 
                <form>
                <div>
                    <input className="search-input" placeholder="Search" type="search" name="search" value={state.condition.search}
                        
                    />
                    <button className="search-btn" type="submit">Search</button>
                </div>
                </form>
                <div className="nav-features">
                    <ul className="nav-links">
                        <NavLink to="/login"  className="nav-direction">
                            <li className="login-btn">Login</li>
                        </NavLink>
                        <NavLink to="/wishlist" className="nav-direction"><li>Wishlist</li></NavLink>
                        <NavLink to="/cart" className="nav-direction"><li>Cart</li></NavLink>
                    </ul>
                </div>
            </div>
    )
}