import React, {useState} from "react";

import "../static/css/Nav.css";
import hamburgerMenuIcon from "../static/images/icon _hamburger menu.svg"

const Nav = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleMenu = () => setIsCollapsed(!isCollapsed);
    
    return (
        <nav className={`navbar`}>
            {/* Mobile Nav */}
            <div className="hamburger-menu-icon">
                <button onClick={toggleMenu}>
                    <img src={hamburgerMenuIcon} alt="menu icon" />
                </button>
            </div>

            {/* Desktop Nav */}
            <div className={`nav-links ${isCollapsed ? "visible" : ""}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/orderOnline">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
