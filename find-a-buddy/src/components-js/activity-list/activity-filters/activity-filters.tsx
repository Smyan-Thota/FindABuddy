import React from "react";
import { MenuButtonProps } from "../../misc/menu-button";

const ActivityFilters = (props: ActivityFiltersProps) => {
    let localFilterValues = props.filterVals;

    const changeVal = (inputFormName: string, valName: string) => {
        const inputElement : HTMLInputElement = document.getElementById("majorInputForm")! as HTMLInputElement;
        localFilterValues[`${valName}`] = inputElement.value
    }

    return(
        <div className="activity-filters">
            <div>
                <p>Gender</p>
                <div>
                    <button onClick={() => {localFilterValues.gender = "man"; console.log(localFilterValues)}} >
                        Man
                    </button>
                    <button onClick={() => {localFilterValues.gender = "woman"; console.log(localFilterValues)}}>
                        Woman
                    </button>
                    <button onClick={() => {localFilterValues.gender = "other"; console.log(localFilterValues)}}>
                        Other
                    </button>
                </div>
                <div>
                    <p>Major</p>
                    <input type="text" id="majorInputForm"></input>
                    <button onClick={() => {changeVal("majorInputForm", "major"); console.log(localFilterValues)}}>Submit</button>
                </div>
            </div>
        </div>
    )
}

interface ActivityFiltersProps {
    filterVals : FilterVals
}

interface FilterVals {
    gender : string,
    major : string
}

export {ActivityFilters, ActivityFiltersProps, FilterVals};