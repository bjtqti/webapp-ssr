"use strict";

 
let { join, resolve } = require('path')
let Koa = require('koa')
let serveStatic = require('koa-static')
let views = require('koa-views')
let router = require('./router')



const app = new Koa()
 

app.use(serveStatic(join('dist', 'client')))
//console.log(staticPath)
 
app.use(
	views(resolve('server', 'views'), { map: { html: 'swig' }, extension: 'html' })
)


app.use(router.routes())
app.use(router.allowedMethods())


module.exports = app