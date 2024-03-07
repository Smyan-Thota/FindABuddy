import React from "react";
import GenderSelector from "./gender-selector.tsx";
import MajorSelector from "./major-selector.tsx";
import YearSelector from "./year-selector.tsx";
import AgeSelector from "./age-selector.tsx";
import "./../../../styling/styling-filters.css";

const ActivityFilters = () => {
    const validMajors = [
        "Computer Science",
        "Chemistry",
        "Math",
        "Statistics",
        "Arts"
    ]

    const modifyCookie = (cookieAttributeName : string, value : string) => {
        let parsedCookie = JSON.parse(document.cookie)
        parsedCookie[cookieAttributeName] = value
        document.cookie = JSON.stringify(parsedCookie)
        console.log(document.cookie)
    }

    const changeVal = (inputFormName: string, valName: string) => {
        const inputElement : HTMLInputElement = document.getElementById(inputFormName)! as HTMLInputElement;
        if ((inputFormName == "majorInputFormMajor" && validMajors.includes(inputElement.value)) || (inputFormName == "majorInputFormAge"))
        {    
            modifyCookie(valName, inputElement.value)
        }
        else 
        {
            inputElement.value = ""
        }
    }

    return(
        <div className="activity-filters">
            <div className="filter-column">
                <GenderSelector valueChangeMethod={modifyCookie} />           
                <YearSelector   valueChangeMethod={modifyCookie} />
            </div>   
            <div className="filter-column">
                <AgeSelector    valueChangeMethod={changeVal}    />
                <MajorSelector  valueChangeMethod={changeVal}    />
            </div>
        </div>
    )
}

interface SelectorParams {
    valueChangeMethod(val1: string, val2: string): void
}

export {ActivityFilters, SelectorParams};