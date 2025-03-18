import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5080/api/products', {
        name,
        price: parseFloat(price),
      })
      .then(() => {
        setMessage('Product added successfully!');
        setName('');
        setPrice('');
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000); // Clear success message after 3 seconds
      })
      .catch((err) => {
        setMessage(`Error: ${err.message}`);
        setIsSuccess(false);
      });
  };

  return (
    <div className="mt-4">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
        {message && (
          <p className={isSuccess ? 'text-success mt-2' : 'text-danger mt-2'}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default AddProduct;