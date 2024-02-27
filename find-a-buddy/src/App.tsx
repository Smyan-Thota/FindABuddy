import React from 'react';
import './App.css';
import Homepage from './components-js/homepage/homepage.tsx';
import Profile from './components-js/profile/profile.tsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActivityList from './components-js/activity-list/activity-list.tsx';
import { ActivityBuddySelect } from './components-js/activity-list/activity-buddy-select.tsx';

/*
 * This basically just serves to do the routing for the whole website, the actual website root is at
 * the "homepage" page.
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path=""                element={ <Homepage     /> } />
                <Route path="profile"         element={ <Profile      /> } />
                <Route path="activity-list"   element={ <ActivityList /> } />
                <Route path="gym-bro"         element={ <ActivityBuddySelect activityName="Gym Bro"         parameterName="gym-bro" /> } />
                <Route path="cooking-partner" element={ <ActivityBuddySelect activityName="Cooking Partner" parameterName="cooking-partner" /> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
