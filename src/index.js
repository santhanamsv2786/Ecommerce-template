import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux"
import cartreducer from "./pagess/Reducers/cartreducer";
import ProReducer from "./pagess/Reducers/Productreducer";
import ProReducer11 from './pagess/Reducers/Productreducer11';



const store = configureStore({
  reducer : {
    Pros : ProReducer,
    Pros1 : ProReducer11,
    cart:cartreducer
  }
 
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
