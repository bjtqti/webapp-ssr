'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Index from '../../client/index/part.jsx';

async function index(ctx,next){
	let markup = ReactDOMServer.renderToString(<Index/>);
	await ctx.render('index', {
        markup:markup,
        initialState:{code:200}
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