import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/actions/productActions';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <div className="container mt-4">
      <h2>Wishlist</h2>
      <div className="row">
        {wishlist.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.title} style={{height: '200px', objectFit: 'contain'}}/>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Price: ${item.price}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                >
                  Remove 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
