"use strict"

import Router from 'koa-router'
import {index,error,notFound} from './controller/main.jsx'

const router = new Router()
  
router.get("/", index);

router.get("/404", notFound)

router.all("*", error)


module.exports = router;