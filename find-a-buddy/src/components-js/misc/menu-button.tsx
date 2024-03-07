import React from "react";
import { Link } from "react-router-dom";
import "./../../styling/parentstyling.css";

/*
 * The goal of this element is to display a button that the user can press to go to another page.
 * Currently, the page you go to and the text displayed in the button are determined by MenuButtonProps.
 */
const MenuButton = (props : MenuButtonProps) => {

    return(
        <button className="style-menu-button">
            <Link to={`/${props.pathString}`} style={{ textDecoration: 'none', color: 'var(--text-color)'}}>
                {props.buttonText}
            </Link>
        </button>
    )
}

interface MenuButtonProps {
    buttonText : string,
    pathString : string,
    additionalProps?: object
};

export { MenuButton, MenuButtonProps }