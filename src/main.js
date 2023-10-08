const Koa = require('koa');
const Router = require('koa-router');
const home = require('./module/user');

const app = new Koa();
const router = new Router();

router.use('/', home.routes()); //配置子路由

app.use(router.routes()); //启动路由
app.use(router.allowedMethods()); //该方法使得可以返回错误状态码404或者5xx

// 监听端口
app.listen(3000, () => {
  console.log('app listening at http://localhost:3000');
});

app.on('error', (err, ctx) => {
  console.error(err);
  ctx.body = err;
});
