import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer from '../reducers/cartReducer.js';
import productReducer from '../reducers/productReducer.js';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

const ReduxProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default ReduxProvider;

