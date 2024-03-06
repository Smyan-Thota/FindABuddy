import React from "react";
import { Link } from "react-router-dom";

/*
 * The goal of this element is to display a button that the user can press to go to another page.
 * Currently, the page you go to and the text displayed in the button are determined by MenuButtonProps.
 */
const MenuButton = (props : MenuButtonProps) => {

    return(
        <button className="menu-button">
            <Link to={`/${props.pathString}`} style={{ textDecoration: 'none'}}>
                {props.buttonText}
            </Link>
        </button>
    )
}

interface MenuButtonProps {
    buttonText : string,
    pathString : string,
    additionalProps?: any
};

export { MenuButton, MenuButtonProps }