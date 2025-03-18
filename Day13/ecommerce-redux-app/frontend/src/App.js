import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <h1>E-Commerce Product Management</h1> 
      <ProductForm />
      <ProductList />
    </div>
  );
}

export default App;