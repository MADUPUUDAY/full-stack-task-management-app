import React from 'react';
import ReactDOM from 'react-dom/client'; // updated import
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
