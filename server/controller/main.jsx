'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import IndexApp from '../../client/index/part.jsx';

async function index(ctx,next){
    let initialState = {
        title:'欢迎首页'
    }
	let markup = ReactDOMServer.renderToString(<IndexApp initialState={initialState} />);
    console.log(markup)
	await ctx.render('index', {
        markup,
        initialState
    })
}

async function notFound(ctx,next){
	await ctx.render('error', {
        markup:'<h1>error</h1>',
        initialState:{code:404}
    })
}

 
async function error(ctx,next){
	await ctx.render('error', {
        markup:'<h1>内部错误</h1>',
        initialState:{code:500}
    })
}

module.exports = {
	index:index,
	notFound:notFound,
	error:error
}