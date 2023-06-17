import { Link } from "react-router-dom";
import {ShoppingCart} from "phosphor-react"
import { CartContext } from '../../CartContext';
import './nav.css'
import { useContext } from "react";

const Nav =()=>{

    const {cartItems} =useContext(CartContext)
    return(
        <div>
            <nav className="myNav">
                <ul>
                    <li><Link to="/" className="link">Shop</Link></li>
                    <li><Link to="/cart" className="link"><ShoppingCart size={32}/>{cartItems.length}</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav