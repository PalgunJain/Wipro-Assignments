import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed import
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Changed Switch to Routes */}
        <Route exact path="/" element={<ProductList />} /> {/* changed Route usage */}
        <Route path="/wishlist" element={<Wishlist />} /> {/* changed Route usage */}
      </Routes>
    </Router>
  );
}

export default App;