import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [editingProductId, setEditingProductId] = useState(null);
  const handleEdit = (productId) => {
    setEditingProductId(productId);
  };
  const handleUpdate = () => {
    setEditingProductId(null);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Product Inventory Management</h1>
      <div className="row">
        <div className="col-md-6">
          <AddProduct />
        </div>
        <div className="col-md-6">
          <ProductList onEdit={handleEdit} />
        </div>
      </div>
      {editingProductId && (
        <div className="row justify-content-center mt-4">
          <div className="col-md-8">
            <EditProduct productId={editingProductId} onUpdate={handleUpdate} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;