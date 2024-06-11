import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import ReduxProvider from './store/store.js';

ReactDOM.render(
  <ReduxProvider>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
