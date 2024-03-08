import React, { useState } from 'react';
import { MenuButton } from '../misc/menu-button.tsx';
import "./../../styling/parentstyling.css";

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

    return (
        <div className="profile">
            <h1>Profile</h1>
            <form onSubmit={handleSave}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        id="name" 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter your name" 
                    />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <input 
                        id="gender" 
                        type="text" 
                        value={gender} 
                        onChange={(e) => setGender(e.target.value)} 
                        placeholder="Enter your gender" 
                    />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input 
                        id="age" 
                        type="number" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                        placeholder="Enter your age" 
                    />
                </div>
                <div>
                    <label htmlFor="graduationYear">Graduation Year:</label>
                    <input 
                        id="graduationYear" 
                        type="number" 
                        value={graduationYear} 
                        onChange={(e) => setGraduationYear(e.target.value)} 
                        placeholder="Enter your graduation year" 
                    />
                </div>
                <div>
                    <label htmlFor="major">Major:</label>
                    <input 
                        id="major" 
                        type="text" 
                        value={major} 
                        onChange={(e) => setMajor(e.target.value)} 
                        placeholder="Enter your major" 
                    />
                </div>
                <button className="style-menu-button" type="submit">Save Profile</button>
            </form>
            <MenuButton buttonText="Back" pathString="" />
        </div>
    );
}

export default Profile;
