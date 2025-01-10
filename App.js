// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

// Auth Components
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';

// Post Components
import CreatePost from './components/Post/CreatePost';
import PostItem from './components/Post/PostItem';
import PostList from './components/Post/PostList';

// Profile Components
import EditProfile from './components/Profile/EditProfile';
import UserProfile from './components/Profile/UserProfile';

// Search Component
import SearchUsers from './components/Search/SearchUsers';

// Messages Component
import MessageList from './components/Messages/MessageList';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Post Routes */}
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostItem />} /> {/* Post Detail Page */}
        <Route path="/postlist" element={<PostList />} />

        {/* Profile Routes */}
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/edit-profile" element={<EditProfile />} />

        {/* Search Routes */}
        <Route path="/search" element={<SearchUsers />} />

        {/* Messages Routes */}
        <Route path="/messages" element={<MessageList />} />

        {/* Default Route (Post List as home page) */}
        <Route path="/" element={<PostList />} />
      </Routes>
    </Router>
  );
};

export default App;
