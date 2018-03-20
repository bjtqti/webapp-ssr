
//require('./index.css')

import React from 'react'
import ReactDOM from "react-dom"
import Index from './part.jsx';
 
 

if (module.hot) {
    module.hot.accept()
}

const initialState = {};
window.addEventListener("DOMContentLoaded",()=>{
  ReactDOM.render(
      <Index initialState={initialState} />,
      document.getElementById('app'))
  
});