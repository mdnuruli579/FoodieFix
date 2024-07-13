import { useState } from "react";
import { RESTURENT_IMG_URL } from "../utils/constant";
import FoodList from "./FoodList";

const RestroCard=(props)=>{
    IMG_URL=RESTURENT_IMG_URL
    const {resturent}=props;
    const {name,cloudinaryImageId,avgRating,cuisines,id}=resturent.info;
    const {deliveryTime}=resturent.info.sla;
    
    return (
        <div className="rest-card" >
            <img className="card-img" alt="card-img" src={IMG_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <p>{avgRating}<span className="start"style={{ color: avgRating > 4 ? 'green' : 'orange' }}>&#9733;</span>   <span>{deliveryTime} minutes</span> </p>
        </div>
    )
} 
export default RestroCard;