//created by Mike Flash | flashmike.com
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import cartReducer from "./ducks/cart";
import productsReducer from "./ducks/products";
import App from "./App";
import productsData from "./data/products";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

let store = createStore(rootReducer, {
  products: productsData, // initial store values
});

render(
  <Provider store={store}>
    <Navbar />
    <App />
    <Footer />
  </Provider>,
  document.getElementById("root")
);
