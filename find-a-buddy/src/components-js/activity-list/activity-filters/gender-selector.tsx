import React from "react";
import { SelectorParams } from "./activity-filters";

const GenderSelector = (params: SelectorParams) => {

    return(
        <div className="button-selector-wrapper">
            <p>Gender</p>
            <div className="button-selector">
                <button onClick={() => {params.valueChangeMethod("gender", "Male")}} >
                    Man
                </button>
                <button onClick={() => {params.valueChangeMethod("gender", "Female")}}>
                    Woman
                </button>
                <button onClick={() => {params.valueChangeMethod("gender", "Other")}}>
                    Other
                </button>
            </div>
        </div>
    )
}

export default GenderSelector;