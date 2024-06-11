import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    setIsCheckedOut(true);
    dispatch(clearCart());
  };

  return (
    <div>
      <ul className="list-group mb-4">
        {cartItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.name} - ${item.price.toFixed(2)}</span>
            <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Total</h5>
          <p className="card-text">${total.toFixed(2)}</p>
          <button className="btn btn-success" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
      {isCheckedOut && <div className="alert alert-success mt-4">Thank you for your purchase!</div>}
    </div>
  );
};

export default Cart;
