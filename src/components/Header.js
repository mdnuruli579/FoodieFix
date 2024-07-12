import { CART, LOGO } from "../utils/constant"

const Header=()=>{
    return (
        <div className="header">
                <div >
                    <img 
                    className="logo"
                    src={LOGO} alt="logo"/>
                </div>
                <div className="nav-item">
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li> <a>About Us</a> </li>
                        <li> <a>Contact Us</a> </li>
                        <li>
                            <a><img className="cart" src={CART} alt="cart"/></a>
                        </li>
                    </ul>
                </div>
        </div>
    )
}
export default Header;