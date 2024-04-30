import React, { useEffect, useState } from "react";
import { MenuButton } from "./menu-button.tsx";
import dummyData from "./../../dummyValues/mockData.json"
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef } from "@mui/x-data-grid";

const Friends = () => {
    const [friends, setFriends] = useState<any>(null);

    useEffect(() => {
        fetchFriends();
      }, []);

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'NAME', flex: 1 },
        { field: 'interests', headerName: 'INTERESTS', flex: 1 },
      ];

    const fetchFriends = async() => {
        try {
            const userId = JSON.parse(document.cookie).userId;

            let data = dummyData.filter((user) => { if (user.userId === userId) {return user} })[0].friends;

            data.map((user, index) => { user["id"] = index })

            setFriends(data)
        } catch(e) { console.log(e) }
    };

    return(
        <div>
            {friends && (
                <div className="activity-style-table">
                    <DataGrid rows={friends} columns={columns}
                    getRowClassName={(params) => { return params.row.id % 2 === 0 ? 'even-row' : 'odd-row'; }}/>
                </div>
            )}
            <MenuButton buttonText="Home" pathString="" />
        </div>
    )
}

export default Friends;