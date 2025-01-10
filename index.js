import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create a root DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root node
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

