import React from 'react';
import './App.css';
import Homepage from './components-js/homepage/homepage.tsx';
import Profile from './components-js/profile/profile.tsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActivityList from './components-js/activity-list/activity-list.tsx';
import { ActivityBuddySelect } from './components-js/activity-list/activity-buddy-select.tsx';
import SignUp from './components-js/sign-up/sign-up.tsx';
import StudyBuddyClassSelect from './components-js/activities/study-buddy/study-buddy-class-select.tsx';
import Header from './components-js/misc/header.tsx';

/*
 * This basically just serves to do the routing for the whole website, the actual website root is at
 * the "homepage" page.
 */
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
            <Routes>
                <Route path=""                          element={ <Homepage     /> } />
                <Route path="sign-up"                   element={ <SignUp       /> } />
                <Route path="profile"                   element={ <Profile      /> } />
                <Route path="activity-list"             element={ <ActivityList /> } />
                <Route path="gym-bro/*"                 element={ <ActivityBuddySelect   activityName="Gym Bro"         parameterName="gym-bro" /> } />
                <Route path="cooking-partner/*"         element={ <ActivityBuddySelect   activityName="Cooking Partner" parameterName="cooking-partner" /> } />
                <Route path="study-buddy/*"             element={ <ActivityBuddySelect   activityName="Study Buddy" parameterName="study-buddy" /> } />
                <Route path="study-buddy-class-select/" element={ <StudyBuddyClassSelect /> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
