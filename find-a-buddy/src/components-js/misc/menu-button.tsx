import React from "react";
import { Link } from "react-router-dom";
import "./../../styling/parentstyling.css";

/*
 * The goal of this element is to display a button that the user can press to go to another page.
 * Currently, the page you go to and the text displayed in the button are determined by MenuButtonProps.
 */
const MenuButton = (props : MenuButtonProps) => {

    return(
        <button className="menu-button">
            <Link className="menu-button-link" to={`/${props.pathString}${(props.additionalProps) ? "/" + props.additionalProps as string : ""}`}>
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