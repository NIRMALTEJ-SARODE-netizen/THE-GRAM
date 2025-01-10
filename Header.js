// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for the header layout
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const Nav = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #28a745;
    color: white;
  }

  &.active {
    background-color: #218838;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          TheGram
        </Link>
      </Logo>
      <Nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/edit-profile">Edit Profile</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </Nav>
      <nav>
        <Link to="/create-post" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>
          Create Post
        </Link>
        <Link to="/postlist" style={{ color: 'white', textDecoration: 'none' }}>
          View Posts
        </Link>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
