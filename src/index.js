//imports react
import React from 'react';
//imports react's document object model
import ReactDOM from 'react-dom';
//imports styling
import './index.css';
//imports react app
import App from './App';
//some kind of testing?
import reportWebVitals from './reportWebVitals';

//render the app in the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
