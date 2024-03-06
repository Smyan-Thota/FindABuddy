import React from "react";
import { Link } from "react-router-dom";

const ToProfile = () => {

    return(
        <button className="to-profile">
            <Link to={'/profile'} style={{ textDecoration: 'none'}}>
                To Profile
            </Link>
        </button>
    )
}

export default ToProfile;