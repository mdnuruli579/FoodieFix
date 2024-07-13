const MenuList=(props)=>{
    console.log(props);
    return (
        <div className="menu">
        <h2>Recommended (20)</h2>
        
        <div className="menu-item">
            <div className="details">
                <span className="bestseller">⭐ Bestseller</span>
                <h3>Create Your Flavour Fun Combo - Box Of 2 - Veg Pizza</h3>
                <span className="price">₹198</span>
                <div className="rating">⭐ 4.1 (843)</div>
                <p className="description">Serves 2 | Choose any 2 veg personal pizzas from our flavour fun range. For meals, refer to the nutritional data for individual products.</p>
            </div>
            <div className="add-btn">
                <img src="https://via.placeholder.com/80" alt="Pizza"/>
                <button>ADD</button>
                <span className="customisable">Customisable</span>
            </div>
        </div>

        <div className="menu-item">
            <div className="details">
                <span className="bestseller">⭐ Bestseller</span>
                <h3>Margherita Pizza</h3>
                <span className="price">₹169</span>
                <div className="rating">⭐ 4.1 (284)</div>
                <p className="description">Serves 1 | Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!</p>
            </div>
            <div className="add-btn">
                <img src="https://via.placeholder.com/80" alt="Pizza"/>
                <button>ADD</button>
                <span className="customisable">Customisable</span>
            </div>
        </div>
        
    </div>

    )
}