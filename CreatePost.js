// src/components/Post/CreatePost.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CreatePostContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #45a049;
  }
`;

const FileInput = styled.input`
  margin: 10px 0;
`;

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!image || !caption || !location) {
      alert('Please fill all fields');
      return;
    }

    const newPost = {
      imageUrl: image,
      caption: caption,
      location: location,
    };

    console.log('New Post:', newPost);

    // Submit to your backend or update state in a parent component
    // Reset form after submission
    setImage(null);
    setCaption('');
    setLocation('');
  };

  return (
    <CreatePostContainer>
      <h2>Create a New Post</h2>
      <FileInput type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Post Preview" style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />}
      <InputField
        type="text"
        placeholder="Add a caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <InputField
        type="text"
        placeholder="Add location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <SubmitButton onClick={handleSubmit}>Post</SubmitButton>
    </CreatePostContainer>
  );
};

export default CreatePost;

