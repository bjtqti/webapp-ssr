"use strict";

import path from 'path'
import Koa from 'koa'
import staticServer from 'koa-static'
import views from 'koa-views'
import router from './router'



const app = new Koa()
let staticPath = path.join(process.cwd(), 'dist/client')
//console.log(staticPath)
 
app.use(staticServer(staticPath))

let viewPath = path.join(process.cwd(), 'views')
 
// Must be used before any router is used
app.use(views(viewPath, {
	map: {
	    html: 'swig'
	},
	extension:"html"
}));



app.use(router.routes())
app.use(router.allowedMethods())


module.exports = app