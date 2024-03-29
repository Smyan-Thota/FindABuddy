import React from "react";
import "./../../styling/parentstyling.css";
import "./../../styling/styling-homepage.css";
import { MenuButton } from "../misc/menu-button.tsx";

/* From the home page, you should be able to access the following pages:
 *   1) Activity List
 *   2) User Profile
 * (We might want to add a logo or something)
 */

const Homepage = () => {
    document.cookie = '{"gender": "", "major": "", "year": "", "age": ""}';

    return(
        <div>
            <div className="homepage style-header">
                <h1 className="style-header-text">Find-A-Buddy!</h1>
            </div>
            <div className="homepage-menu-buttons">
                <MenuButton buttonText="Profile"    pathString="profile"       />
                <MenuButton buttonText="Activities" pathString="activity-list" />
            </div>
        </div>
    )
}

export default Homepage;
