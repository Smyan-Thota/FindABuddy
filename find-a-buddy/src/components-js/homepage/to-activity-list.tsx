import React from "react";
import { Link } from "react-router-dom";

const ToActivityList = () => {

    return(
        <button className="to-activity-list">
            <Link to={'/activity-list'} style={{ textDecoration: 'none'}}>
                To Activity List
            </Link>
        </button>
    )
}

export default ToActivityList;