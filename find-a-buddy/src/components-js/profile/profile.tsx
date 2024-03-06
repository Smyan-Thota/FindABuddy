import React, { useState } from 'react';
import { MenuButton } from '../misc/menu-button.tsx';

const Profile = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [major, setMajor] = useState('');

    // Updated handler to save the data to the backend
    const handleSave = async (e) => {
        e.preventDefault();
        
        // Construct the profile data object
        const profileData = {
            name,
            gender,
            age: parseInt(age), // Ensure age is sent as a number
            graduationYear,
            major
        };

        // Use fetch API to send a POST request to the backend
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
            <h1>Profile!</h1>
            <form onSubmit={handleSave}>
                {/* Form fields remain unchanged */}
                <button type="submit">Save Profile</button>
            </form>
            <MenuButton buttonText="Back" pathString="" />
        </div>
    );
}

export default Profile;
