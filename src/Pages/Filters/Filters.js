import { useContext,useState } from "react"
import { ProductContext } from "../../Context/ProductContext"
import "./Filters.css"
export default function Filters(){

    const [rangeValue, setRangeValue] = useState(1);

    const {state,productDispatch} = useContext(ProductContext)
    

    return (
        <>
            <div className="filters-container">
                <form submit="">
                    <div >
                        <div className="filters-heading">
                            <h4>Filters</h4>
                            <button type="submit" onClick={() => console.log("clicked")}>Clear</button>
                        </div>
                    </div>
                    <h4>Price</h4>
                    <ul>
                        <li>
                            <input type="radio" name="price" id="HTL" onClick={() => console.log("clicked")}/>
                            <label>High To Low</label>
                        </li>
                        <li>
                            <input type="radio" name="price" id="LTH" onClick={() => console.log("clicked")}/>
                            <label>Low to High</label>
                        </li>
                    </ul>
                    <h4>Categories</h4>
                    <ul>
                        <li>
                            <input type="checkbox"
                            name="categories"
                            />
                            <label>Fiction</label>
                        </li>
                        <li>
                            <input type="checkbox"
                            name="categories"/>
                            <label>Non Fiction</label>
                        </li>
                        <li>
                            <input type="checkbox"
                            name="categories"/>
                            <label>Self Help</label>
                        </li>
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
                        <input type="range" step="1" min="-5" max="-1" className="rating-input" value={rangeValue}
                        />
                    </div>

                </form>
            </div>
        </>
    )
}