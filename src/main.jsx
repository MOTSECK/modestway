import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import '../styles/globals.css'; 
import '../styles/header.css';
import '../styles/footer.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App /> {/* App ne contient plus de <Router> */}
    </HashRouter>
  </React.StrictMode>
);
