import { useState } from "react";
import { restaurants } from "../utils/constant";
import RestroCard from "./RestroCard";

const Body=()=>{
    
    const [resturents,setResturent]=useState(restaurants);
    const filterResturent=()=>{
        const filterList=resturents.filter((res)=>res.info.avgRating > 4);
        setResturent(filterList);
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={filterResturent}>
                    Top Rated
                </button>
            </div>
            <div className="restContainer">
                {
                    resturents.map((resturent,index)=>(
                        <RestroCard key={resturent.info.id} resturent={resturent} />
                    ))
                }
            </div>
        </div>
    )
}
export default Body;