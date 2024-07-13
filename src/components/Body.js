import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Loader from "./Loader";
import { findLocation } from "../utils/common";
import { Link } from "react-router-dom";
import { LIST_URL } from "../utils/constant";

const Body=()=>{
    const [resturents,setResturent]=useState([]);
    const [sotreResturents,setStoreResturent]=useState([]);
    const [search,setSearch]=useState('');
    const [isfilter,setFilter]=useState(false);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async ()=>{
        setSearch('');
        const location=await findLocation();
        const data=await fetch(`${LIST_URL}${location.lat}&lng=${location.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const jsonData= await data.json();
        const jsonValue=jsonData?.data?.cards?.filter((card)=> card?.card?.card?.id ==="restaurant_grid_listing" );
        if (jsonValue && jsonValue.length > 0) {
            const restaurants = jsonValue[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setResturent(restaurants || []);
            setStoreResturent(restaurants || []);
          } else {
            console.error("No matching restaurant grid listing found");
            setResturent([]);
            setStoreResturent([]);
          }
    }
    const searchResturent=()=>{
        const filterList=resturents.filter((res)=>res.info.name.includes(search));
        setFilter(true);
        setResturent(filterList);
    }
    const filterResturent=()=>{
        const filterList=resturents.filter((res)=>res.info.avgRating > 4);
        setResturent(filterList);
    }
    return resturents.length === 0 && !isfilter ? <Loader/> :(
        <div className="body">
            <div className="filter">
                <input className="search" type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                <button className="filter-btn" onClick={searchResturent}>
                    Search
                </button>
                <button className="filter-btn" onClick={filterResturent}>
                    Top Rated
                </button>
                <button className="filter-btn" onClick={()=>{
                    setSearch('');
                    setResturent(sotreResturents)}}>
                    Clear
                </button>
            </div>
            <div className="restContainer">
                {
                    resturents.map((resturent,index)=>(
                        <Link className="card-body" key={resturent.info.id} to={"/resturent/"+resturent.info.id}><RestroCard resturent={resturent} /></Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;