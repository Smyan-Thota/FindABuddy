import React, { useState } from "react";
import { MenuButton } from "../misc/menu-button.tsx";
import {ActivityFilters} from "./activity-filters/activity-filters.tsx";

/*
 * The goal of this element is to display all of the acitivites that a person can try to find a buddy for
 * using this app.
 */ 
const ActivityList = () => {

    return(
        <div className="activity-list">
            <h1>Activity List!</h1>
            <p>In the future we can add filters here to be passed into the query</p>
            <ActivityFilters />
            <div>
                <MenuButton buttonText="Gym Bro"         pathString="gym-bro"          />
                <MenuButton buttonText="Cooking Partner" pathString="cooking-partner"  />
            </div>
            <MenuButton buttonText="Back" pathString="" />           
        </div>
    )
}

export default ActivityList;