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
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
