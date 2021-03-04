const Koa = require('koa')
const KoaStatic = require('koa-static')
const path = require('path')
const nunjucks = require('nunjucks')

const config = require('./config')

const app = new Koa()

if (process.env.NODE_ENV === 'development') {
    console.warn('development environment')
    const setupWebpackMiddleware = require('./webpack')
    setupWebpackMiddleware(app)
}

// 配置静态资源加载中间件
nunjucks.configure(path.join(__dirname, '../www'), {
    escape: true
})

// 配置静态资源加载中间件
app.use(KoaStatic(path.join(path.join(__dirname, '../www'))))

// 渲染index.html
// 若请求的api没办法匹配, 则渲染index.html
app.use(async ctx => {
    ctx.body = nunjucks.render('__index__template__.html', {})
})

app.listen(config.port)

console.warn('Server started at port: ' + config.port)
