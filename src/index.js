import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App.js'; // Added .js extension
import store from './store/store.js'; // Added .js extension

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
