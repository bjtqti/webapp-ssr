"use strict";

import "./index.css"
import React from 'react'
import ReactDOM from "react-dom"
import Index from './part.jsx';
 

if (module.hot) {
    module.hot.accept()
}


function bootstrap(){
	//var initialState = {}
    var initialState = JSON.parse(document.getElementById("initial-state").textContent);
    console.log(initialState)
    ReactDOM.render(<Index initialState={initialState} />,document.getElementById('app'))
}

window.addEventListener("DOMContentLoaded",bootstrap);
	
  
 