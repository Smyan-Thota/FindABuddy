import React, { useState } from 'react';
import { MenuButton } from '../misc/menu-button.tsx';

const Profile = () => {
    // State hooks for each profile field
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [major, setMajor] = useState('');

    // Handler to simulate saving the data (Backend team need to edit here for the save logic)
    const handleSave = (e) => {
        e.preventDefault();
        alert('Profile saved!'); // Replace with actual save logic
    };

    return (
        <div className="profile">
            <h1>Profile!</h1>
            <form onSubmit={handleSave}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}placeholder="Enter your Name" />
                </div>
                <div>
                    <label>Bio</label>
                    <div>
                        <label>Gender:</label>
                        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Enter your Gender"/>
                    </div>
                    <div>
                        <label>Age:</label>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your Age"/>
                    </div>
                    <div>
                        <label>Graduation Year:</label>
                        <input type="number" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} placeholder="Enter Grad Year"/>
                    </div>
                    <div>
                        <label>Major:</label>
                        <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} placeholder="Enter your major" />
                    </div>
                </div>
                <button type="submit">Save Profile</button>
            </form>
            <MenuButton buttonText="Back" pathString="" />
        </div>
    );
}

export default Profile;
