const Koa = require('koa')
const koaBody = require('koa-body')
const router = require('./api/v1/src/routes.config')

const app = new Koa()

app.use(koaBody())
app.use(router.routes())

app.listen(3000, () => console.log('Server started!'))
