import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// js
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/jquery/dist/jquery.slim.min";
import "../node_modules/popper.js/dist/umd/popper.min";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sass/main.scss';
import { SnackbarProvider } from 'notistack';
import { Provider } from "react-redux";
import store from "./store";



ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
    <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
