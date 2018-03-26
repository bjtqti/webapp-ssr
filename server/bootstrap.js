"use strict";

import path from 'path'
import Koa from 'koa'
import staticServer from 'koa-static'
import render from 'koa-swig'
import co from 'co'
import router from './router'

const app = new Koa()
const viewPath = path.join(process.cwd(), 'view')

app.use(staticServer(path.join("dist/client")))
app.context.render = co.wrap(render({
	root: viewPath,
	autoescape: true,
	cache: false, // disable, set to false 
	ext: 'html'
}))
app.use(router.routes())
app.use(router.allowedMethods())


module.exports = app