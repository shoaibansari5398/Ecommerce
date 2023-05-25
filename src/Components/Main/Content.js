import Products from "../../Pages/Products/Products";
import Filters from "../../Pages/Filters/Filters";
import "./Content.css"

export default function Content(){
    return(
            <>
            <div className="content-container">
                <Filters/>
                <Products/>
            </div>
            </>
        )
}
