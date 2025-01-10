// components/Search/SearchUsers.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
`;

const SearchBox = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const UserCard = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const UserName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const SearchUsers = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', profilePic: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Jane Smith', profilePic: 'https://via.placeholder.com/50' },
    // Add more users here
  ]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      <SearchBox
        type="text"
        placeholder="Search for users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredUsers.map((user) => (
        <UserCard key={user.id}>
          <ProfileImage src={user.profilePic} alt={user.name} />
          <UserName>{user.name}</UserName>
        </UserCard>
      ))}
    </Container>
  );
};

export default SearchUsers;
