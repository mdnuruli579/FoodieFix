import React, { useEffect, useState } from 'react'
import { findLocation } from '../utils/common'
import { useParams } from 'react-router-dom'
import { API_URL, DEL_LOGO } from '../utils/constant';
import Loader from './Loader';
import MenuList from './MenuList';


const FoodList = () => {
   const {id}=useParams();
   const [resturentDetails,setResturentDetails]=useState(null);
    useEffect(()=>{
        getFoodItem();
    },[]);
    const getFoodItem=async ()=>{
        const location= await findLocation();
        const data=await fetch(`${API_URL}${location.lat}&lng=${location.lng}&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const dataJson=await data.json();
       // console.log(dataJson);
        const allrestDet=dataJson?.data?.cards;
        setResturentDetails(allrestDet);
        // setResturentDetails(allrestDet[2]?.card?.card?.info);
    }
    
  return !resturentDetails ? <Loader/>: (
    <div className="food-item">
       <div className="card">
        <h2>{resturentDetails[2]?.card?.card?.info?.name}</h2>
          <div>
              <span className="rating">⭐ {resturentDetails[2]?.card?.card?.info?.avgRating} ({resturentDetails[2]?.card?.card?.info?.totalRatingsString})</span>
              <span className="cost">{resturentDetails[2]?.card?.card?.info?.costForTwoMessage}</span>
          </div>
          <div className="cuisine">{resturentDetails[2]?.card?.card?.info?.cuisines?.join(",")}</div>
          <div className="details">
              <div>Outlet: {resturentDetails[2]?.card?.card?.info?.areaName}</div>
              <div>{resturentDetails[2]?.card?.card?.info?.sla?.slaString}</div>
          </div>
          <div className="delivery">
              <img src={DEL_LOGO} alt="Delivery icon"/>
              <span>Delivery Charge Applicable</span>
          </div>
      </div>
      {resturentDetails && resturentDetails[4] && <MenuList menu={resturentDetails[4]}/>}
    </div>
  )
}

export default FoodList;