import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Cart from "./Pages/Cart/Cart";
import LandingPage from "./Components/Main/Content";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Account from "./Pages/Account/Account";
import Address from "./Pages/Account/Address";
import Profile from "./Pages/Account/Profile";
import Checkout from "./Pages/Checkout/Checkout";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Order from "./Pages/Order/Order";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<LandingPage />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/address" element={<Address />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
