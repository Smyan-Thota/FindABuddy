import React from "react";
import { MenuButton } from "../misc/menu-button.tsx";

/* From the home page, you should be able to access the following pages:
 *   1) Activity List
 *   2) User Profile
 * (We might want to add a logo or something)
 */

const Homepage = () => {

    return(
        <div className="homepage">
            <h1>Find-A-Buddy!</h1>
            <MenuButton buttonText="Profile"    pathString="profile" />
            <MenuButton buttonText="Activities" pathString="activity-list" />
        </div>
    )
}

export default Homepage;
