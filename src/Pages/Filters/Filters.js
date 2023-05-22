import "./Filters.css"
export default function Filters(){
    return (
            <div className="filters-container">
                <form>
                    <div >
                        <div className="filters-heading">
                            <h4>Filters</h4>
                            <button>Clear</button>
                        </div>
                    </div>
                    <h4>Price</h4>
                    <ul>
                        <li>
                            <input type="radio"/>
                            <label>High To Low</label>
                        </li>
                        <li>
                            <input type="radio"/>
                            <label>Low to High</label>
                        </li>
                    </ul>
                    <h4>Categories</h4>
                    <ul>
                        <li>
                            <input type="checkbox"/>
                            <label>Fiction</label>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <label>Non Fiction</label>
                        </li>
                        <li>
                            <input type="checkbox"/>
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
                        <input type="range" step="1" min="-5" max="-1" className="rating-input"/>
                    </div>

                </form>
            </div>
    )
}