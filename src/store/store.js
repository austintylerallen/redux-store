import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/productReducer.js';
import cartReducer from '../reducers/cartReducer.js';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
