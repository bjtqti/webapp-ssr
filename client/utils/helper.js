'use strict'
import {
    createStore, applyMiddleware,compose
}
from "redux";
//import React,{Component} from "react";
import thunkMiddleware from "redux-thunk";
 

const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    typeof window === 'object' && 
    typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore)

export default createStoreWithMiddleware;
