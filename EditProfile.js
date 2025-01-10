// src/components/Profile/EditProfile.js
import React, { useState } from 'react';
import styled from 'styled-components';

const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #f8f8f8;
  min-height: 100vh;
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 250px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  width: 250px;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #218838;
  }
`;

const EditProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [bio, setBio] = useState('');
  const [newProfilePicture, setNewProfilePicture] = useState(null);

  // Handle the profile picture upload
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfilePicture(URL.createObjectURL(file));  // Temporarily show the image
      setProfilePicture(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the API request to update the profile
    console.log('Profile updated:', { bio, profilePicture });

    // For this example, we simply log the new bio and profile picture
    alert('Profile updated successfully!');
  };

  return (
    <EditProfileContainer>
      <h2>Edit Profile</h2>

      {/* Profile Picture Section */}
      <ProfileImageWrapper>
        <ProfileImage
          src={newProfilePicture || 'https://via.placeholder.com/150'}
          alt="Profile"
        />
        <Input
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
        />
      </ProfileImageWrapper>

      {/* Bio Section */}
      <TextArea
        rows="4"
        placeholder="Enter your bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />

      {/* Update Button */}
      <Button onClick={handleSubmit}>Update Profile</Button>
    </EditProfileContainer>
  );
};

export default EditProfile;
