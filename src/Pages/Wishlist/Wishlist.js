import { useContext } from "react";
import { WishlistContext } from "../../Context/WishlistContext";
import WishlistCard from "./WishlistCard";
// import "./Wishist.css";

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);
  return (
    <>
      {wishlist.length < 1 ? (
        <h2 className="empty-wishlist">
          Your Wishlist is Empty. Please add items in your Favourites!
        </h2>
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
