import React from "react";
import { SelectorParams } from "./activity-filters";

const GenderSelector = (params: SelectorParams) => {

    return(
        <div className="button-selector-wrapper">
            <p>Gender</p>
            <div className="button-selector">
                <button onClick={() => {params.valueChangeMethod("gender", "male")}} >
                    Man
                </button>
                <button onClick={() => {params.valueChangeMethod("gender", "female")}}>
                    Woman
                </button>
                <button onClick={() => {params.valueChangeMethod("gender", "other")}}>
                    Other
                </button>
            </div>
        </div>
    )
}

export default GenderSelector;