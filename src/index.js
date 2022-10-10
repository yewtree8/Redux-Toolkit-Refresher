import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import userReducer from './features/user';

const storeConfig = configureStore({
  reducer : {
    user: userReducer,
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider
    store={storeConfig}>
      <App />
    </Provider>
  </React.StrictMode>
);


// reportWebVitals();
