import { useContext } from "react";
import { FiltersContext } from "../../Context/FiltersContext";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./Products.css";
import Loader from "../../Components/Loader/Loader";

export default function Products() {
  const { sortByPriceFilterHandler } = useContext(FiltersContext);

  return (
    <div className="container">
      {sortByPriceFilterHandler.length === 0 ? (
        <Loader />
      ) : sortByPriceFilterHandler.length > 0 ? (
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
