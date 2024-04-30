import React, { useState } from 'react';
import { MenuButton } from '../misc/menu-button.tsx';
import "./../../styling/parentstyling.css";
import { Link } from 'react-router-dom';
import writeUsers from './../../backend/local_write_jsons/users.json';
import readUsers from './../../backend/local_read_jsons/users.json'


const Profile = () => {
    const [caseId, setCaseId] = useState(''); // add input for this
    const [name, setName] = useState('');
    const [password, setPassword] = useState(''); //add input for this
    const [primaryInt, setPrimaryInt] = useState(''); // add input for this
    const [classId, setClassId] = useState('') // add input for this
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [major, setMajor] = useState('');

    const primaryInterestList = ["gym bro", "cooking partner", "study buddy"];
    const validYears = ["freshman", "sophmore", "junior", "senior"]

    const addNewProfile = async () => {
        let idAlreadyExists = false;
        readUsers.forEach((user) => { 
            idAlreadyExists = (idAlreadyExists || user.userId === name)
                && primaryInterestList.includes(primaryInt)
                && validYears.includes(graduationYear)
        })

        let year : string = "";

        switch (graduationYear) {
            case "freshman": 
                year = "1";
                break;
            case "sophmore": 
                year = "2";
                break;
            case "junior": 
                year = "3";
                break;
            case "senior": 
                year = "4";
                break;
            default:
                year = "1";
                break;
        }

        if (idAlreadyExists) { writeUsers.push(
            {
                "userId": caseId,
                "password": password,
                "name": name,
                "interests": primaryInt,
                "year": year,
                "age": age,
                "major": major,
                "gender": gender,
                "extraParam": classId,
                "friends": []
              }
        ) }
    }

    const logout = () => {
        let parsedCookie = JSON.parse(document.cookie);
        parsedCookie.userId = ""
        document.cookie = JSON.stringify(parsedCookie)
    }

    return (
        <div>
            <div className="style-header" >
                <h1 className="style-header-text">Profile</h1>
            </div>
            <div>
                <img className="side-page-background" src={require('./../../res/ProfilePageDesign.png')} />
            </div>
            <div>
                <form onSubmit={addNewProfile}>
                    <div className="style-profile-attr">
                        <label htmlFor="name">Name:</label>
                    </div>
                    <div className="profile-style-input-box">
                        <input 
                            id="name" 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Enter your name" 
                        />
                    </div>
                    <div className="style-profile-attr">
                        <label htmlFor="gender">Gender:</label>
                    </div>
                    <div className="profile-style-input-box">
                        <input 
                            id="gender" 
                            type="text" 
                            value={gender} 
                            onChange={(e) => setGender(e.target.value)} 
                            placeholder="Enter your gender" 
                        />
                    </div>
                    <div className="style-profile-attr">
                        <label htmlFor="age">Age:</label>
                    </div>
                    <div className="profile-style-input-box">
                        <input 
                            id="age" 
                            type="number" 
                            value={age} 
                            onChange={(e) => setAge(e.target.value)} 
                            placeholder="Enter your age" 
                        />
                    </div>
                    <div className="style-profile-attr">
                        <label htmlFor="graduationYear">Graduation Year:</label>
                    </div>
                    <div className="profile-style-input-box">
                        <input 
                            id="graduationYear" 
                            type="number" 
                            value={graduationYear} 
                            onChange={(e) => setGraduationYear(e.target.value)} 
                            placeholder="Enter your graduation year" 
                        />
                    </div>
                    <div className="style-profile-attr">
                        <label htmlFor="major">Major:</label>
                    </div>
                    <div className="profile-style-input-box">
                        <input 
                            id="major" 
                            type="text" 
                            value={major} 
                            onChange={(e) => setMajor(e.target.value)} 
                            placeholder="Enter your major" 
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <MenuButton buttonText="Back" pathString="" />
                    <button  onClick={ () =>{ logout() } }> <Link className="menu-button-link" to="/" >Logout</Link> </button>
                    <button className="menu-button menu-button-link" type="submit">Save Profile</button>
                </form>
            </div>
        </div>
    );
}

export default Profile;
