const Router = require('koa-router')
const objectTypeDao = require('../dao/object_type')
const router = new Router()

router.get('/set', async (ctx, next) => {
  let params = ctx.request.query
  let name = params.name
  let id = params.id
  let res = await objectTypeDao.save(id, name) 
  ctx.body = {
    state: 1,
    message: 'ok',
    data: null
  } 
})

module.exports = router