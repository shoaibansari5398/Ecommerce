import { useContext } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { WishlistContext } from "../../Context/WishlistContext";
import WishlistCard from "./WishlistCard";

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);
  return (
    <>
      {wishlist.length < 1 ? (
        <h2>Your Wishlist is Empty. Please add items in your Favourites!</h2>
      ) : (
        <div className="wishlist">
          {wishlist?.map((product) => {
            return (
              <div>
                <WishlistCard key={product.id} product={product} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
