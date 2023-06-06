import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import "./Home.css";
import { FiltersContext } from "../../Context/FiltersContext";
import Loader from "../../Components/Loader/Loader";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  const { state } = useContext(ProductContext);
  const { filterDispatch } = useContext(FiltersContext);
  const navigate = useNavigate();

  const categoryHandler = (category) => {
    filterDispatch({ type: "CATEGORY_FITER", payload: category });
    navigate("/products");
  };

  return (
    <div>
      <div className="books-container">
        <h2>Select books on your Preference </h2>
        <div className="books-categories">
          {state?.categories.length === 0 ? (
            <Loader />
          ) : (
            state?.categories.map(({ category, description }) => (
              <div
                className="book-category"
                onClick={() => categoryHandler(category)}
              >
                <h3>{category}</h3>
                <p>{description}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
