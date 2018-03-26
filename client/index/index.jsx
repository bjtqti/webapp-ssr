
//require('./index.css')

import React from 'react'
import ReactDOM from "react-dom"
import Index from './part.jsx';
 
 

if (module.hot) {
    module.hot.accept()
}

window.addEventListener("DOMContentLoaded",()=>{
	let initialState = JSON.parse(document.getElementById("initial-state").textContent)
 	ReactDOM.render(
      <Index initialState={initialState} />,
      document.getElementById('app'))
  
});