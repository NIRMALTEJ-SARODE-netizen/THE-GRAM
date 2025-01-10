// components/Messages/MessageList.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
`;

const MessageCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const SenderName = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const MessageText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const MessageList = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John', text: 'Hey, how are you?' },
    { id: 2, sender: 'Jane', text: 'I’m doing great, thanks!' },
    // Add more messages here
  ]);

  return (
    <Container>
      {messages.map((msg) => (
        <MessageCard key={msg.id}>
          <SenderName>{msg.sender}</SenderName>
          <MessageText>{msg.text}</MessageText>
        </MessageCard>
      ))}
    </Container>
  );
};

export default MessageList;
