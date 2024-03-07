import React from "react";
import { MenuButton } from "../misc/menu-button.tsx";

/*
 * The goal of this element is to display all of the acitivites that a person can try to find a buddy for
 * using this app.
 */ 
const ActivityList = () => {

    return(
        <div className="activity-list style-header">
            <h1 className="style-header-text">Activity List!</h1>
            <p>In the future we can add filters here to be passed into the query</p>
            <div>
                <MenuButton buttonText="Gym Bro"         pathString="gym-bro" />
                <MenuButton buttonText="Cooking Partner" pathString="cooking-partner" />
            </div>
            <MenuButton buttonText="Back" pathString="" />
        </div>
    )
}

interface filtersProps {
    major: string,
    gender: string,
    yearMin: string,
    yearMax: string,
    proficiency: string
}

export default ActivityList;