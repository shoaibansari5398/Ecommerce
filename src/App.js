import "./App.css";
import Header from "./Components/Navbar";
import Cart from "./Pages/Cart";
import LandingPage from "./Pages/LandingPage";
import Mockman from "mockman-js";
import { Routes,Route} from "react-router-dom";
import Wishlist from "./Pages/Wishlist";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/mockman" element={<Mockman/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
      </Routes>
      {/* <div className="MockAPI">
        <Mockman />
      </div> */}
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;