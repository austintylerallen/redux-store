import 'bootstrap/dist/css/bootstrap.min.css';
import '../src';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReduxProvider from './store/store';

ReactDOM.render(
  <ReduxProvider>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
