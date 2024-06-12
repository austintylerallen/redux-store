import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../reducers/cartReducer.js'; // Updated import path

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  if (!cart || cart.length === 0) {
    return (
      <div className="container my-4">
        <div className="card">
          <div className="card-body">Your cart is empty</div>
        </div>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container my-4">
      <div className="card mb-4">
        <div className="card-body">
          {cart.map(item => (
            <div key={item.cartItemId} className="d-flex justify-content-between align-items-center mb-2">
              <div>
                <p className="mb-0"><strong>{item.name}</strong></p>
                <p className="mb-0">${item.price.toFixed(2)}</p>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(removeFromCart(item.cartItemId))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="card">
        <div className="card-body d-flex justify-content-between align-items-center">
          <p className="mb-0"><strong>Total: ${total.toFixed(2)}</strong></p>
          <button className="btn btn-danger" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
