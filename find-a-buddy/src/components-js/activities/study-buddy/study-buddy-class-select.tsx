import React, { useState } from "react";
import { MenuButton } from "../../misc/menu-button.tsx";
import departmentList from "../../../valueLists/departmentList.json"

const StudyBuddyClassSelect = () => {
    const [selectedDepartment, setSelectedDepartment] = useState("");

    const updateSelectedDepartment = ({ target }) => {
        setSelectedDepartment(target.value)
    }

    const modifyCookie = (cookieAttributeName : string, value : string) => {
        if(document.cookie.includes("CookieConsent")) {
            console.log();
            document.cookie = document.cookie.replace("CookieConsent=true; ", "");
        }
        console.log(document.cookie)
        let parsedCookie = JSON.parse(document.cookie)
        parsedCookie[cookieAttributeName] = value
        document.cookie = JSON.stringify(parsedCookie)
        console.log(document.cookie)
    }

    return(
        <div className="study-buddy-class-select">
            <h1>Study Buddy Class Select</h1>
            <p> Which class do you want to find a study buddy for? </p>
            <select className="buddySelectorDropDown" id="buddySelectorDropDown" onChange={updateSelectedDepartment}>
                {departmentList.map((element) => {
                    return (<option value={element} > {element} </option>)
                })}
            </select>
            <input type="number" id="classNumSelect"></input>
            <button onClick={() => {modifyCookie('extraParam', `${selectedDepartment} ${getClassNum()}`)}}>Submit</button>

            <MenuButton buttonText="Submit" pathString="study-buddy"/>
            <MenuButton buttonText="Back"   pathString="activity-list" />
        </div>
    )
}

const getClassNum = () : string => {
    var classNumInput : HTMLInputElement = document.getElementById("classNumSelect") as HTMLInputElement
    console.log(classNumInput.value)
    return classNumInput.value;
}

export default StudyBuddyClassSelect;