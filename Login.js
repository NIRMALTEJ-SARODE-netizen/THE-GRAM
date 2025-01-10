// src/components/Auth/Login.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #f8f8f8;
  min-height: 100vh;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 250px;
  border-radius: 5px;
  border: 1px solid #ccc;
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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For simplicity, let's assume the email and password should be "test@example.com" and "password123"
    if (email === 'test@example.com' && password === 'password123') {
      // Redirect to the home page (or a protected route)
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </LoginContainer>
  );
};

export default Login;
