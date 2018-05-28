'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import IndexApp from '../../client/index/app.jsx';
import {menuList} from './mock'

async function index(ctx,next){
    console.log(menuList)
    let initialState = {
        menuList
    }
	let markup = ReactDOMServer.renderToString(<IndexApp initialState={initialState} />);
    //console.log(markup)
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