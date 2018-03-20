
//require("babel-register"); // 开发环境下使用
//require("babel-polyfill"); 

const path = require('path')
const Koa = require('koa')
const router = require('./router')
const staticServer = require('koa-static');
const app = new Koa()
const viewPath = path.join(process.cwd(), 'view')
const render = require('koa-swig');
const co = require('co');


app.use(staticServer(path.join("dist")));

//const views = require('koa-views');
//app.use(views(viewPath, { map: { html: "swig" }, extension: "html" }))
app.context.render = co.wrap(render({
  root: viewPath,
  autoescape: true,
  cache: false, // disable, set to false 
  ext: 'html'
}));

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
