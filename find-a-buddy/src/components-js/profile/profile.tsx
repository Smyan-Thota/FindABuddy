import React from "react";
import { MenuButton } from "../misc/menu-button.tsx";

/*
 * The goal of this page is to display the current user's profile.
 */
const Profile = () => {

    return(
        <div className="profile">
            <h1>Profile!</h1>
            <MenuButton buttonText="Back" pathString="" />
        </div>
    )
}

export default Profile;