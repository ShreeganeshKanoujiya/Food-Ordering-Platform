import React, { useState } from "react";
import style from "./../CSS/card.module.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import CartSidebar from "./CartSidebar";

const Navbar = ({cart, setCart}) => {

    let [showCart, setShowCart] = useState(false)
    const cartCount = cart.reduce((total, item) => total + (item.qty ?? 1), 0)

    return (
        <div className={style.mainContainer}>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li 
                        onClick={() => setShowCart(true)}
                        style={{cursor: "pointer"}}
                    >
                        <FaShoppingCart />({cartCount})</li>
                </ul>
            </nav>

            {/* Sidebar */}
            {showCart && (
                <CartSidebar
                    cart={cart}
                    setCart={setCart}
                    setShowCart={setShowCart}
                />
            )}
        </div>
    )
}

export default Navbar