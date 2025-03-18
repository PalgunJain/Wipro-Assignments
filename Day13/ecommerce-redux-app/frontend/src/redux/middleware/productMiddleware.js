import {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    addProductRequest,
    addProductSuccess,
    addProductFailure,
    deleteProductRequest,
    deleteProductSuccess,
    deleteProductFailure,
  } from '../actions/productActions';
  
  export const fetchProducts = () => async (dispatch) => {
    dispatch(fetchProductsRequest());
    try {
      const response = await fetch('http://localhost:5174/api/products'); // Updated URL
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const products = await response.json();
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
  
  export const addProduct = (product) => async (dispatch) => {
    dispatch(addProductRequest(product));
    try {
      const response = await fetch('http://localhost:5174/api/products', { // Updated URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newProduct = await response.json();
      dispatch(addProductSuccess(newProduct));
    } catch (error) {
      dispatch(addProductFailure(error.message));
    }
  };
  
  export const deleteProduct = (id) => async (dispatch) => {
    dispatch(deleteProductRequest(id));
    try {
      const response = await fetch(`http://localhost:5174/api/products/${id}`, { // Updated URL
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      dispatch(deleteProductSuccess(id));
    } catch (error) {
      dispatch(deleteProductFailure(error.message));
    }
  };