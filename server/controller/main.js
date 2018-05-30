'use strict';

let {menuList} = require('./mock')
let {markupOfComponent} = require('../lib/util.js')


async function index(ctx,next){
    //console.log(menuList)
    let initialState = {
        menuList
    }
	let markup = markupOfComponent('index', initialState)
   // console.log(markup)
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


async function getUserPost(ctx,next){
    console.log(ctx.request.body)
    ctx.res.setHeader('Access-Control-Allow-Origin', '*')
    ctx.res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,PUT,POST,DELETE,OPTIONS'
    )
    ctx.res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, Content-Length, X-Requested-With, Accept, x-csrf-token, origin'
    )

    ctx.body = {
      
        message:'hello'
    }
     
}

 
async function error(ctx,next){
	await ctx.render('error', {
        markup:'<h1>内部错误</h1>',
        initialState:{code:500}
    })
}

async function checkStatus(ctx,next){
    
}

module.exports = {
	index:index,
	notFound:notFound,
	error:error,
    getUserPost:getUserPost
}