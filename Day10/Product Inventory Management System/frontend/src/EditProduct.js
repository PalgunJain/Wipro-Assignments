import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditProduct({ productId, onUpdate }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5080/api/products/${productId}`)
      .then((response) => {
        setName(response.data.name);
        setPrice(response.data.price);
      })
      .catch((err) => {
        setMessage(`Error: ${err.message}`);
      });
  }, [productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5080/api/products/${productId}`, {
        productId,
        name,
        price: parseFloat(price),
      })
      .then(() => {
        setMessage('Product updated successfully!');
        onUpdate();
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);
      })
      .catch((err) => {
        setMessage(`Error: ${err.message}`);
        setIsSuccess(false);
      });
  };

  return (
    <div className="mt-4">
      <h2>Edit Product</h2>
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
          Update Product
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

export default EditProduct;