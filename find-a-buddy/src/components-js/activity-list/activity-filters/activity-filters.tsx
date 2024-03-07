import React from "react";

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
            <div>
                <p>Gender</p>
                <div>
                    <button onClick={() => {modifyCookie("gender", "male")}} >
                        Man
                    </button>
                    <button onClick={() => {modifyCookie("gender", "female")}}>
                        Woman
                    </button>
                    <button onClick={() => {modifyCookie("gender", "other")}}>
                        Other
                    </button>
                </div>
                <div>
                    <p>Major</p>
                    <input type="text" id="majorInputFormMajor"></input>
                    <button onClick={() => {changeVal("majorInputFormMajor", "major")}}>Submit</button>
                </div>
                <div>
                    <p>Year</p>
                    <div>
                        <button onClick={() => {modifyCookie("year", "1")}} >
                            Freshman
                        </button>
                        <button onClick={() => {modifyCookie("year", "2")}}>
                            Sophomore
                        </button>
                        <button onClick={() => {modifyCookie("year", "3")}}>
                            Junior
                        </button>
                        <button onClick={() => {modifyCookie("year", "4")}}>
                            Senior
                        </button>
                    </div>
                </div>    
                <div>
                    <p>Year</p>
                    <input type="number" id="majorInputFormAge"></input>
                    <button onClick={() => {changeVal("majorInputFormAge", "age")}}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export {ActivityFilters};