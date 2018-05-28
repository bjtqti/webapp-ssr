"use strict";

import "./index.css"
import '../component/loading.css'
import React from 'react'
import ReactDOM from "react-dom"
import IndexApp from './app.jsx';
 

if (module.hot) {
    module.hot.accept()
}

 

//function bootstrap(){
	 
    
//}

//window.addEventListener("DOMContentLoaded",function(){
	var initialState =JSON.parse(document.getElementById("initial-state").textContent);
	//console.log(initialState)
	ReactDOM.render(<IndexApp initialState={initialState} />,document.getElementById('app'))
//});
	
  
 