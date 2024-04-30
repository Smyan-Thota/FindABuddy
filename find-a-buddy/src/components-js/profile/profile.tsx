import React, { useState } from 'react';
import { MenuButton } from '../misc/menu-button.tsx';
import "./../../styling/parentstyling.css";
import { Link } from 'react-router-dom';

const Profile = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [major, setMajor] = useState('');

    const handleSave = async (e) => {
        console.log("Attempting to save profile..."); // Debugging line
        e.preventDefault();
        
        const profileData = {
            name,
            gender,
            age: parseInt(age, 10), // Ensure age is sent as an integer
            graduationYear,
            major
        };

        try {
            const response = await fetch('/user-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(profileData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Profile saved:', data);
            alert('Profile saved successfully!');
        } catch (error) {
            console.error('Error saving profile:', error);
            alert('Failed to save profile.');
        }
    };

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
                <form onSubmit={handleSave}>
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
