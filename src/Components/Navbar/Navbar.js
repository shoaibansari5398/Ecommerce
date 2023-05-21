import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Header(){
    return(
            <div className="navbar">
                <NavLink to="/" className="nav-direction">
                    <div>Ecomm</div>
                </NavLink> 
                <div><input className="search-input" placeholder="Search"></input></div>
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