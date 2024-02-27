import React from "react";
import { MenuButton } from "../misc/menu-button.tsx";

/*
 * The goal of ActivityBuddySelect is to display the output of a query done in the backend based on parameters input by the front end.
 * At the moment, the parameters are the activity that the other person is interested in finding a partner for and a number of arbitrary
 * parameters that I kinda just made up and listed in the filtersProps interface in activity-list.tsx. 
 * 
 * ActivityBuddySelect is just an interface that stores the props for this UI element.
 */
const ActivityBuddySelect = (props : ActivityBuddyProps) => {

    return(
        <div className="activity-buddy-select">
            <h1>{`Select a ${props.activityName}`}</h1>
            <p>
                In the future we need to add a list that will display an output to a query
                that searches for suitable {props.activityName}
            </p>
            <MenuButton buttonText="Back" pathString="activity-list" />
        </div>
    )
}

interface ActivityBuddyProps {
    activityName: string,
    parameterName: string
};

export { ActivityBuddySelect, ActivityBuddyProps}