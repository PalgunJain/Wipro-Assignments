
import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
  } from '../actions/productActions';
  
  const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_PRODUCTS_SUCCESS:
        return { ...state, loading: false, products: action.payload };
      case FETCH_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case ADD_PRODUCT_REQUEST:
        return { ...state, loading: true, error: null };
      case ADD_PRODUCT_SUCCESS:
        return { ...state, loading: false, products: [...state.products, action.payload] };
      case ADD_PRODUCT_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case DELETE_PRODUCT_REQUEST:
        return { ...state, loading: true, error: null };
      case DELETE_PRODUCT_SUCCESS:
        return { ...state, loading: false, products: state.products.filter((product) => product.id !== action.payload) };
      case DELETE_PRODUCT_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default productReducer;