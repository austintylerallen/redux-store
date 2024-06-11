import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from '../reducers/cartReducer';
import productReducer from '../reducers/productReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

const store = createStore(rootReducer);

const ReduxProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default ReduxProvider;
