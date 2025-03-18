import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/middleware/productMiddleware';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ name, price: parseFloat(price) }));
    setName('');
    setPrice('');
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}> {/* Improved form layout */}
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ marginBottom: '10px', padding: '8px' }} // Added spacing
        />
        <input 
          type="number" 
          placeholder="Price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          style={{ marginBottom: '10px', padding: '8px' }} // Added spacing
        />
        <button type="submit" style={{ padding: '8px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>Add</button>
      </form>
    </div>
  );
};

export default ProductForm;