import React from "react";
import { SelectorParams } from "./activity-filters";

const MajorSelector = (params: SelectorParams) => {

    return(
        <div className="text-selector">
            <p>Major</p>
            <input type="text" id="majorInputFormMajor"></input>
            <button onClick={() => {params.valueChangeMethod("majorInputFormMajor", "major")}}>Submit</button>
        </div>
    )
}

export default MajorSelector;