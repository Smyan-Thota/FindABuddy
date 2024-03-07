import React, { useEffect, useState } from "react";
import { MenuButton } from "../misc/menu-button.tsx";
import dummyData from "./../../dummyValues/mockData.json";

const ActivityBuddySelect = (props: ActivityBuddyProps) => {
  const [data, setData] = useState<any>(null);
  const [valuesList, setValuesList] = useState<JSX.Element[] | null>(null);


  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const listItems = data.map((user: any) =>
      <div>
        <li key={user.name}>
            {user.name} {user.year} {user.age} {user.major} {user.gender}</li>
      </div>
      );
      setValuesList(listItems);
    }
  }, [data]);

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

      setData(filteredData);
    } catch (error) {
      console.error("Error fetching the data: ", error);
    }
  };

  return (
    <div className="activity-buddy-select">
      <h1>{`Select a ${props.activityName}`}</h1>
      <p>
        In the future we need to add a list that will display an output to a query that searches for suitable{" "}
        {props.activityName}
      </p>
      <ul>{valuesList}</ul>
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
