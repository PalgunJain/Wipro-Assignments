import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render( // Use root.render
  <Provider store={store}>
    <App />
  </Provider>
);