import React from 'react';
import ReactDOM from 'react-dom/client';  // ✅ Use 'react-dom/client' for React 18+
import App from './App';
import './styles.css';

console.log("React App is Mounting... ✅");  // Debugging Log

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ New Method
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
