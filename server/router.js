"use strict"

let Router = require('koa-router')
let {index,error,notFound} = require('./controller/main.js')

const router = new Router()
  
router.get("/", index);

router.get("/404", notFound)

router.all("*", error)


module.exports = router;