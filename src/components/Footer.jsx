import React from "react";
import style from "../CSS/card.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerInner}>
                <div className={style.footerBrand}>
                    <h3>Meow Food</h3>
                    <p>Simple UI components, routing, and reusable layouts.</p>
                    <p>
                        &copy; 2026 My React App. All rights reserved to Shreeganesh Kanoujiya.
                    </p>
                </div>

                <nav className={style.footerNav} aria-label="Footer navigation">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/contact"}>Contact</Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer