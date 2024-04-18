import React, { useState } from "react";
import { MenuButton } from "../misc/menu-button.tsx";
import {ActivityFilters} from "./activity-filters/activity-filters.tsx";
import activityList from "./../../valueLists/activityList.json"

/*
 * The goal of this element is to display all of the acitivites that a person can try to find a buddy for
 * using this app.
 * 
 * <div>
        <MenuButton buttonText="Gym Bro"         pathString="gym-bro"          />
        <MenuButton buttonText="Cooking Partner" pathString="cooking-partner"  />
    </div>
 */ 

// Change this so we select the buddy we want to select using a drop down menu, with a seperate submit button to run the query

const ActivityList = () => {
    const [selectedActivity, setSelectedActivity] = useState("");

    const updateSelectedActivity = ({ target }) => {
        setSelectedActivity(target.value)
    }


    return(
        <div>
            <div className="style-header">
                <h1 className="style-header-text">Activity List</h1>
                <ActivityFilters />
                <select className="buddySelectorDropDown" id="buddySelectorDropDown" onChange={updateSelectedActivity}>
                    {activityList.map((element) => {
                        return (<option value={element.pathString} > {element.buttonText} </option>)
                    })}
                </select>
                <div>
                    <MenuButton buttonText="Back"   pathString="" />
                    <MenuButton buttonText="Search" pathString={selectedActivity} />
                </div>
            </div>                 
        </div>
    )
}


export default ActivityList;