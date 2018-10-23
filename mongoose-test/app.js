const Koa = require('koa')
// const Router = require('koa-router')
const app = new Koa()
// const router = new Router()
const testController = require('./controller/testController')

// app.use(router.routes()).use(router.allowedMethods())
app.use(testController.routes()).use(testController.allowedMethods())
// app.use(async function (ctx, next) {
//   ctx.body = {
//     state: 1,
//     message: 'ok',
//     data: null
//   }
//   await next()
// })

app.listen(3304)
