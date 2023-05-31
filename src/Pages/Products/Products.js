import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { FiltersContext } from "../../Context/FiltersContext";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Products.css";
import { NavLink } from "react-router-dom";

export default function Products() {
  const { state } = useContext(ProductContext);
  const { sortByPriceFilterHandler } = useContext(FiltersContext);

  return (
    <div className="container">
      {sortByPriceFilterHandler.length > 0 ? (
        sortByPriceFilterHandler?.map((product) => {
          return (
            <div>
              <ProductCard key={product.id} product={product} />
            </div>
          );
        })
      ) : (
        <h2>No Record Found</h2>
      )}
    </div>
  );
}
