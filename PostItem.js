// src/components/Post/PostItem.js
import React, { useState } from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 10px 0;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const PostImage = styled.img`
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const PostCaption = styled.p`
  font-size: 14px;
  color: #555;
  margin: 5px 0;
`;

const PostLocation = styled.p`
  font-size: 12px;
  color: #777;
  margin: 5px 0;
`;

const LikeButton = styled.button`
  background-color: ${props => (props.liked ? '#ff4081' : '#ddd')};
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
`;

const CommentSection = styled.div`
  margin-top: 20px;
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CommentList = styled.div`
  margin-top: 10px;
  text-align: left;
  font-size: 14px;
  color: #444;
`;

const PostItem = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(post.comments || []);
  const [commentInput, setCommentInput] = useState('');

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }
  };

  return (
    <PostContainer>
      <PostImage src={post.imageUrl} alt="Post" />
      <PostCaption>{post.caption}</PostCaption>
      <PostLocation>{post.location}</PostLocation>

      {/* Like/Unlike Button */}
      <LikeButton liked={liked} onClick={handleLike}>
        {liked ? 'Unlike' : 'Like'}
      </LikeButton>

      {/* Comment Section */}
      <CommentSection>
        <CommentInput
          type="text"
          value={commentInput}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
        />
        <button onClick={handleCommentSubmit}>Post Comment</button>

        {/* Display comments */}
        <CommentList>
          {comments.map((comment, index) => (
            <div key={index}>{comment}</div>
          ))}
        </CommentList>
      </CommentSection>
    </PostContainer>
  );
};

export default PostItem;
