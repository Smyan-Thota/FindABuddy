import React, { useState } from "react";
import { MenuButton } from "../misc/menu-button.tsx";
import {ActivityFilters} from "./activity-filters/activity-filters.tsx";

/*
 * The goal of this element is to display all of the acitivites that a person can try to find a buddy for
 * using this app.
 */ 
const ActivityList = () => {
    const [filterVals, setFilterVals] = useState({
        gender : "",
        major : ""
    });

    return(
        <div className="activity-list">
            <h1>Activity List!</h1>
            <p>In the future we can add filters here to be passed into the query</p>
            <ActivityFilters filterVals = {filterVals} />
            <div>
                <MenuButton buttonText="Gym Bro"         pathString="gym-bro"          additionalProps={[setFilterVals, filterVals]} />
                <MenuButton buttonText="Cooking Partner" pathString="cooking-partner"  additionalProps={[setFilterVals, filterVals]} />
            </div>           
        </div>
    )
}

export default ActivityList;