import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/./dist/css/bootstrap.css';
import { restaurants, RESTURENT_IMG_URL } from "./constant";
const IMG_URL=RESTURENT_IMG_URL;
const Header=()=>{
    return (
        <div className="header">
                <div >
                    <img 
                    className="logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All" alt="logo"/>
                </div>
                <div className="nav-item">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
                </div>
        </div>
    )
}
const RestroCard=(props)=>{
    const {resturent}=props;
    const {name,cloudinaryImageId,avgRating,cuisines,}=resturent.info;
    const {deliveryTime}=resturent.info.sla;
    //console.log(resturent);
    return (
        <div className="rest-card">
            <img className="card-img" alt="card-img" src={IMG_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <p>{avgRating} Star <span>{deliveryTime} minutes</span> </p>
        </div>
    )
} 
const Body=()=>{
    const resturents=restaurants;
    return (
        <div className="body">
            <div className="search">Search</div>
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
const Footer=()=>{
    return (
        <div className="footer">
            <h3>@2023 | FoodieFix </h3>
        </div>
    )
}
const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
