import { useState } from "react";

const MenuList=(props)=>{
    const menuList=props?.menu?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(menuList);
    const itemCards=menuList.filter((item,index)=> index!==0 && item?.card?.card?.title!=="Top Picks" );
    // const itemCards=menuList[1]?.card?.card;
    // console.log(itemCards);
    return (
        <div className="menu">
            {
                itemCards.map((element, index) => {
                    const cardItem = element?.card?.card?.itemCards;
                    if (cardItem && cardItem.length > 0) {
                        return (
                            <div key={index} className="category-section">
                                <input type="checkbox" id={`category-toggle-${index}`} className="category-toggle" />
                                <label className="category" htmlFor={`category-toggle-${index}`}>{cardItem[0]?.card?.info?.category}</label>
                                <div className="dropdown-content">
                                    {cardItem.map((item) => (
                                        <div key={item?.card?.info?.id} className="menu-item">
                                            <div className="details">
                                                <h3>{item?.card?.info?.name}</h3>
                                                <span className="price">₹{item?.card?.info?.price / 100 || 0}</span>
                                                <div className="rating">⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating} ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</div>
                                                <p className="description">{item?.card?.info.description}</p>
                                            </div>
                                            <div className="add-btn">
                                                <img src="https://via.placeholder.com/80" alt="Pizza" />
                                                <button>ADD</button>
                                                <span className="customisable">Customisable</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })
            }
        </div>
    );
    
    
}
export default MenuList;