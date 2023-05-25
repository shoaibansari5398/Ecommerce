import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Cart from "./Pages/Cart/Cart";
import LandingPage from "./Components/Main/Content";
import Mockman from "mockman-js";
import { Routes,Route} from "react-router-dom";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mockman" element={<Mockman/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<Signup/>} />
      </Routes>
      {/* <div className="MockAPI">
        <Mockman />
      </div> */}
      {/* <LandingPage /> */}
      <Footer />
    </div>
  );
}

export default App;