import { useState } from "react";
import { CART, LOGO } from "../utils/constant"
import { Link } from "react-router-dom";

const Header=()=>{
    const [loginLogout,setLoginLogout]=useState("Login");
    const [islogin,setIsLogin]=useState(true);
    const handleOnClick=()=>{
        if(islogin){
            setLoginLogout("Logout");
        }else{
            setLoginLogout("Login");
        }
        setIsLogin(!islogin);
    }
    return (
        <div className="header">
                <div >
                    <Link to="/">
                        <img 
                        className="logo"
                        src={LOGO} alt="logo"/>
                    </Link>
                </div>
                <div className="nav-item">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li> <Link to="/about" >About Us</Link> </li>
                        <li> <Link to="/contact">Contact Us</Link> </li>
                        <li>
                            <a><img className="cart" src={CART} alt="cart"/></a>
                        </li>
                        <li className="login"> <a onClick={handleOnClick}>{loginLogout}</a> </li>
                    </ul>
                </div>
        </div>
    )
}
export default Header;