import { RESTURENT_IMG_URL } from "../utils/constant";

const RestroCard=(props)=>{
    IMG_URL=RESTURENT_IMG_URL
    const {resturent}=props;
    const {name,cloudinaryImageId,avgRating,cuisines,}=resturent.info;
    const {deliveryTime}=resturent.info.sla;
    //console.log(resturent);
    return (
        <div className="rest-card">
            <img className="card-img" alt="card-img" src={IMG_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <p>{avgRating} star  <span>{deliveryTime} minutes</span> </p>
        </div>
    )
} 
export default RestroCard;