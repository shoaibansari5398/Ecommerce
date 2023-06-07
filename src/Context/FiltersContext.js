import { createContext, useContext, useReducer } from "react";
import { ProductContext } from "./ProductContext";

export const FiltersContext = createContext();

const filterReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return { ...state, search: action.payload };
    case "PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "RATING_FILTER":
      return { ...state, ratingFilter: action.payload };
    case "CATEGORY_FILTER":
      return {
        ...state,
        categoryFilter: state?.categoryFilter?.includes(action.payload)
          ? state?.categoryFilter?.filter(
              (category) => category !== action.payload
            )
          : [...state?.categoryFilter, action.payload],
      };
    case "PRICE_SORT":
      return { ...state, sortByPriceFilter: action.payload };
    case "CLEAR_ALL":
      return {
        search: "",
        priceRange: 1000,
        categoryFilter: [],
        ratingFilter: "",
        sortByPriceFilter: "",
      };
    default:
      return state;
  }
};

export default function FiltersProvider({ children }) {
  const { state } = useContext(ProductContext);

  const initialFilter = {
    search: "",
    priceRange: 1000,
    categoryFilter: [],
    ratingFilter: "",
    sortByPriceFilter: "",
  };

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilter
  );

  const searchFilteredProducts =
    filterState?.search?.length > 0
      ? state?.products?.filter(({ name }) =>
          name.toLowerCase().includes(filterState?.search?.toLowerCase())
        )
      : state?.products;

  const priceRangeFilterHandler = searchFilteredProducts?.filter(
    ({ price }) => Number(price) <= Number(filterState?.priceRange)
  );

  const categoryFilterHandler =
    filterState?.categoryFilter?.length > 0
      ? priceRangeFilterHandler.filter(({ category }) =>
          filterState?.categoryFilter?.includes(category)
        )
      : priceRangeFilterHandler;

  const ratingFilterHandler =
    filterState?.ratingFilter?.length > 0
      ? categoryFilterHandler.filter(
          ({ rating }) => rating >= filterState?.ratingFilter
        )
      : categoryFilterHandler;

  const sortByPriceFilterHandler =
    filterState?.sortByPriceFilter?.length > 0
      ? [...ratingFilterHandler].sort((a, b) =>
          filterState?.sortByPriceFilter === "LTH"
            ? a.price - b.price
            : b.price - a.price
        )
      : ratingFilterHandler;

  return (
    <FiltersContext.Provider
      value={{
        filterDispatch,
        filterState,
        sortByPriceFilterHandler,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
