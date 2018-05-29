'use strict';

let React = require('react');
let ReactDOMServer = require('react-dom/server');
let { resolve } = require('path')
 

module.exports = {
    markupOfComponent:(route,initialState)=>{
        let IndexApp = require(resolve('client', `${route}/app.jsx`)).default;
        let markup = ReactDOMServer.renderToString(<IndexApp initialState={initialState} />);
        //console.log(markup)
        return markup;
    }
}

 