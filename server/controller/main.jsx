'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Index from '../../client/index/part.jsx';

async function index(ctx,next){
    let initialState = {
        title:'来自服务器的数据'
    }
	let markup = ReactDOMServer.renderToString(<Index initialState={initialState} />);
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