import React, { useEffect, useState } from "react";
import { MenuButton } from "./menu-button.tsx";
import dummyData from "./../../backend/local_read_jsons/users.json"
import { Link } from "react-router-dom";


const SignIn = () => {
    const changeUserCookieUID = (userInfo) => {
        const parsedCookie = JSON.parse(document.cookie);

        let user = dummyData.filter((user) => { return user.userId === userInfo.userId });
        if (user["userId"] === "") { throw new Error("That was not a valid user")}
        if (user["password"] !== userInfo.password) { throw new Error("That was the incorrect password") }

        parsedCookie["userId"] = userInfo[0];
        console.log(parsedCookie)
        console.log(userInfo.userId)
        document.cookie = JSON.stringify(parsedCookie);
    }

    const getUserInfo = () => {
        const inputUserId : HTMLInputElement = document.getElementById("caseid")! as HTMLInputElement;
        const inputPassword : HTMLInputElement = document.getElementById("password")! as HTMLInputElement;

        return [inputUserId.value, inputPassword.value];
    }

    return(
        <div>
            <div>
                <p>CaseID</p>
                <input type="text" id="caseid"></input>
            </div>
            <div>
                <p>Password</p>
                <input type="text" id="password"></input>
            </div>
            <div>
                <MenuButton buttonText="Back" pathString="" />
                <button  onClick={ () =>{changeUserCookieUID(getUserInfo()); } }> <Link className="menu-button-link" to="/" >Submit</Link> </button>
            </div>
        </div>
    )
}

export default SignIn;