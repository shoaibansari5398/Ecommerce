import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { FiltersContext } from "../../Context/FiltersContext";
import "./Filters.css";
export default function Filters() {
  const { state, productDispatch } = useContext(ProductContext);
  const { filterState, filterDispatch } = useContext(FiltersContext);

  return (
    <>
      <div className="filters-container">
        <form submit="">
          <div>
            <div className="filters-heading">
              <h4>Filters</h4>
              <button type="submit" onClick={() => console.log("clicked")}>
                Clear
              </button>
            </div>
          </div>
          <div className="price-filter">
            <h4>Price</h4>
            <div className="price-values">
              <span>0</span>
              <span>500</span>
              <span>1000</span>
            </div>
            <input
              type="range"
              min={0}
              max={1000}
              className="price-input"
              value={filterState?.priceRange}
              onChange={(e) =>
                filterDispatch({ type: "PRICE_RANGE", payload: e.target.value })
              }
            />
          </div>

          <h4>Sort By Price</h4>
          <ul>
            <li>
              <input
                type="radio"
                name="price"
                id="HTL"
                onClick={() =>
                  filterDispatch({ type: "PRICE_SORT", payload: "HTL" })
                }
              />
              <label>High To Low</label>
            </li>
            <li>
              <input
                type="radio"
                name="price"
                id="LTH"
                onClick={() =>
                  filterDispatch({ type: "PRICE_SORT", payload: "LTH" })
                }
              />
              <label>Low to High</label>
            </li>
          </ul>
          <h4>Categories</h4>
          <ul>
            {state.categories.map(({ _id, category }) => (
              <li key={_id}>
                <input
                  type="checkbox"
                  key={category}
                  checked={filterState?.categoryFilter?.includes(category)}
                  onChange={() =>
                    filterDispatch({
                      type: "CATEGORY_FILTER",
                      payload: category,
                    })
                  }
                />
                <label>{category}</label>
              </li>
            ))}
          </ul>
          <div className="filters-rating">
            <h4>Rating</h4>
            <div className="rating">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              className="rating-input"
              value={filterState?.ratingFilter}
              onChange={(e) =>
                filterDispatch({
                  type: "RATING_FILTER",
                  payload: e.target.value,
                })
              }
            />
          </div>
        </form>
      </div>
    </>
  );
}
