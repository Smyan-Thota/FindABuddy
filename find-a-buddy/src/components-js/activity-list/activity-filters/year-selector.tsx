import React from "react";
import { SelectorParams } from "./activity-filters";

const YearSelector = (params: SelectorParams) => {

    return(
        <div className="button-selector-wrapper">
            <p>Year</p>
            <div className="button-selector">
                <button onClick={() => {params.valueChangeMethod("year", "1")}} >
                    Freshman
                </button>
                <button onClick={() => {params.valueChangeMethod("year", "2")}}>
                    Sophomore
                </button>
                <button onClick={() => {params.valueChangeMethod("year", "3")}}>
                    Junior
                </button>
                <button onClick={() => {params.valueChangeMethod("year", "4")}}>
                    Senior
                </button>
            </div>
        </div> 
    )
}

export default YearSelector;