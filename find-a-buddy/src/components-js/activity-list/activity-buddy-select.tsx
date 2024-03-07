import React, { useEffect, useState } from "react";
import { MenuButton } from "../misc/menu-button.tsx";
import { DataGrid, GridColDef } from '@mui/x-data-grid'; // Import DataGrid component
import dummyData from "./../../dummyValues/mockData.json";

const ActivityBuddySelect = (props: ActivityBuddyProps) => {
  const [data, setData] = useState<any>(null);


  useEffect(() => {
    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'NAME', flex: 1 },
    { field: 'year', headerName: 'YEAR', flex: 1 },
    { field: 'age', headerName: 'AGE', flex: 1 },
    { field: 'major', headerName: 'MAJOR', flex: 1 },
    { field: 'gender', headerName: 'GENDER', flex: 1 },
  ];

  const fetchData = async () => {
    try {
      // This is just the basic url for the website
      const filterJSON : string = document.cookie

      const filterJSONData = JSON.parse(filterJSON)

      let filteredData = dummyData.filter((user) => user.interests === props.parameterName)
      if (filterJSONData.gender != '') { filteredData = filteredData.filter((user) => user.gender === filterJSONData.gender) }
      if (filterJSONData.major  != '') { filteredData = filteredData.filter((user) => user.major === filterJSONData.major) }
      if (filterJSONData.year   != '') { filteredData = filteredData.filter((user) => user.year === filterJSONData.year) }
      if (filterJSONData.age    != '') { filteredData = filteredData.filter((user) => user.age === filterJSONData.age) }

      filteredData.map((user, index) => {
        user["id"] = index
      })

      setData(filteredData);
    } catch (error) {
      console.error("Error fetching the data: ", error);
    }
  };

  return (
    <div className="activity-buddy-select style-header">
      <h1 className="style-header-text">{`Select a ${props.activityName}`}</h1>
      <p>
        In the future we need to add a list that will display an output to a query that searches for suitable.{" "}
        {props.activityName}
      </p>
      {data && (
        <div className="activity-style-table">
          <DataGrid rows={data} columns={columns}
            getRowClassName={(params) => { return params.row.id % 2 === 0 ? 'even-row' : 'odd-row'; }}
            />
        </div>
      )}
      <MenuButton buttonText="Back" pathString="activity-list" />
    </div>
  );
};

interface ActivityBuddyProps {
  interests?: string;
  activityName: string;
  parameterName: string;
}

export { ActivityBuddySelect, ActivityBuddyProps };
