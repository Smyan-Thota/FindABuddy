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
        <div className="profile style-header">
            <h1 className="style-header-text">Profile!</h1>
            <form onSubmit={handleSave}>
                <div>
                    <div className="style-profile-attr">
                        <label>Name:</label>
                    </div>
                    <div className="profile-style-input-box">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}placeholder="Enter your Name" style={{width: "300px"}}/>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="style-profile-attr">
                            <label>Gender:</label>
                        </div>
                        <div className="profile-style-input-box">
                            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Enter your Gender" style={{width: "300px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="style-profile-attr">
                            <label>Age:</label>
                        </div>
                        <div className="profile-style-input-box">
                            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your Age" style={{width: "300px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="style-profile-attr">
                            <label>Graduation Year:</label>
                        </div>
                        <div className="profile-style-input-box">
                            <input type="number" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} placeholder="Enter Grad Year" style={{width: "300px"}}/>
                        </div>
                    </div>
                    <div>
                        <div className="style-profile-attr">
                            <label>Major:</label>
                        </div>
                        <div className="profile-style-input-box">
                            <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} placeholder="Enter your major"  style={{width: "300px"}}/>
                        </div>
                    </div>
                </div>
                <MenuButton buttonText="Back" pathString="" />
                <button className="style-menu-button" type="submit">Save Profile</button>
            </form>
        </div>
    );
}

export default Profile;
