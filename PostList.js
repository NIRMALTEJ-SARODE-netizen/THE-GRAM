// components/Post/PostList.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
`;

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Caption = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const Button = styled.button`
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const PostList = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      caption: 'Beautiful sunset at the beach.',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
      id: 2,
      caption: 'Amazing food I had today!',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    // Add more posts here
  ]);

  return (
    <Container>
      {posts.map((post) => (
        <PostCard key={post.id}>
          <PostImage src={post.imageUrl} alt="Post" />
          <Caption>{post.caption}</Caption>
          <div>
            <Button>Like</Button>
            <Button>Comment</Button>
          </div>
        </PostCard>
      ))}
    </Container>
  );
};

export default PostList;
