// src/components/Profile/UserProfile.js
import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  padding: 20px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const ProfileInfo = styled.div`
  text-align: center;
`;

const ProfileName = styled.h2`
  font-size: 24px;
  margin: 10px 0;
`;

const Bio = styled.p`
  font-size: 16px;
  color: #555;
  margin: 10px 0;
`;

const FollowStats = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
`;

const Stat = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const UserProfile = () => {
  return (
    <ProfileContainer>
      <ProfileImage src="https://via.placeholder.com/150" alt="User" />
      <ProfileInfo>
        <ProfileName>John Doe</ProfileName>
        <Bio>This is a short bio about John Doe.</Bio>
        <FollowStats>
          <Stat>Followers: 200</Stat>
          <Stat>Following: 150</Stat>
        </FollowStats>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default UserProfile;
