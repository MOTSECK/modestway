import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../styles/globals.css'; 
import '../styles/header.css';
import '../styles/footer.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* App ne contient plus de <Router> */}
    </BrowserRouter>
  </React.StrictMode>
);
