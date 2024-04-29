import React, { useState } from 'react';
import { MenuButton } from '../misc/menu-button.tsx';
import "./../../styling/parentstyling.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log('Menu toggle attempted');
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="top-header">
                <div className="style-header-text">
                    <img className="logo-size" src={require('./../../res/LogoExtraReal.png')} />
                    Find-A-Buddy
                </div>
                <button className="menu-tab-button" onClick={toggleMenu}>MENU</button>
                {isMenuOpen && (
                    <div className="dropdown-menu">
                        <nav>
                            <a href="/">Home</a>
                            <a href="/profile">Profile</a>
                            <a href="/activity-list">Activities</a>
                            <a href="/contact">Contact</a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;