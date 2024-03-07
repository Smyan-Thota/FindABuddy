import React from "react";
import { SelectorParams } from "./activity-filters";

const AgeSelector = (params: SelectorParams) => {

    return(
        <div className="text-selector">
            <p>Age</p>
            <input type="number" id="majorInputFormAge"></input>
            <button onClick={() => {params.valueChangeMethod("majorInputFormAge", "age")}}>Submit</button>
        </div>
    )
}

export default AgeSelector;