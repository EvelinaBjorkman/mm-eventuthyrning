import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CategoryListContextProvider from './contexts/CategoryListContextProvider';
import ProductListContextProvider from './contexts/ProductListContextProvider';
import CartListContextProvider from './contexts/CartListContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <CategoryListContextProvider>
      <ProductListContextProvider>
        <CartListContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartListContextProvider>
      </ProductListContextProvider>
    </CategoryListContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
