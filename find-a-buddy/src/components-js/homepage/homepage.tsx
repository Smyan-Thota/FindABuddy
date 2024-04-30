import React, { useEffect, useState } from "react";
import "./../../styling/parentstyling.css";
import "./../../styling/styling-homepage.css";
import { MenuButton } from "../misc/menu-button.tsx";

/* From the home page, you should be able to access the following pages:
 *   1) Activity List
 *   2) User Profile
 * (We might want to add a logo or something)
 */

const Homepage = () => {
    const [signedIn, setSignedIn] = useState<boolean>();
    
    useEffect(() => {
        setSignedIn(isSignedIn());
    }, []);

    const isSignedIn = () : boolean => {
        document.cookie = document.cookie === "" ? '{"userId": "", "filters": {"gender": "", "major": "", "year": "", "age": "", "extraParam": ""}}' : document.cookie;
        const cookieJSON = JSON.parse(document.cookie)
        const outputBoolean = cookieJSON["userId"] !== "";

        return outputBoolean; 
    }

    return(
        <div>
            <div className="homepage style-header">
                <h1 className="style-header-text">Home</h1>
            </div>
            <div>
                <img className="home-page-background" src={require('./../../res/HomePageDesign.png')} />
            </div>
            <div className="homepage-menu-buttons">
                {signedIn ? 
                    (
                        <div>
                            <MenuButton buttonText="Profile"    pathString="profile"       />
                            <MenuButton buttonText="Friends"    pathString="friends"       />
                            <MenuButton buttonText="Activities" pathString="activity-list" />
                        </div>
                    ) :
                    (
                        <div>
                            <MenuButton buttonText="Sign In" pathString="sign-in" />
                        </div>
                    )
                }               
            </div>
        </div>
    )
}

export default Homepage;
