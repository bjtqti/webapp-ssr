const Router = require('koa-router')
const router = new Router()
//const {index,error,notFound} = require('./controller/main')
const {index,error,notFound} = require('../dist/server/app.js')

router.get("/index", index);

router.get("/404", notFound)

router.all("*", error)


module.exports = router;