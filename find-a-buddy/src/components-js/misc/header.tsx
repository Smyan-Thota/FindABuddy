import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./../../styling/parentstyling.css";

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Gets the current web page location

    // Get the page name by itself
    const getPageName = (path: string) => {
        const parts = path.split('/');
        const pageName = parts[parts.length - 1];
        return pageName || 'Home';
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="top-header">
                <div className="style-header-text">
                    <img className="logo-size" src={require('./../../res/LogoExtraReal.png')} />
                    Find-A-Buddy
                </div>
            </div>
            <div className="style-header">
                <h1 className="style-header-text">{pageTitle || getPageName(location.pathname)}</h1>
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

interface HeaderProps {
    pageTitle : string,
};

export default Header;