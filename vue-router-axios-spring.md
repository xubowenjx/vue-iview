# 使用Vue cli & vue-router & axios 本地以及发布到spring web中踩坑记录
## axios 根路径配置
```javascript
let env = process.env.NODE_ENV
const ajaxUrl = env === 'development'
  ? '/'
  : env === 'production'
  ? './'
  : 'https://debug.url.com'
axios.defaults.baseURL = ajaxUrl
axios.defaults.timeout = 30000
axios.defaults.withCredentials = true
```
## node dev环境和测试后台联调接口问题
这里需要配置webpack一个proxy,具体配置如下
```javascript
//webpack.dev.conf.js里
devServer:{
//其他配置
proxy: {
      '/': {//此处的/和上面ajaxUrl中env对应的/是对应的
        //此处配置后台的跟路径 做java的都知道项目有个根路径
        target: 'http://127.0.0.1:8080/be4app',
        changeOrigin: true
      },
      pathRewrite: {
        
      }
    }
}
//其他配置
```
此处的be4app也是本地测试的项目根路径
加入后台后一个url为```/be4app/rest/news```
那么再已经设置了axios根路径的情况下 只需要请求```/rest/news```就行了,利用上面的代理,会将所有```/```开头的请求自动转发到```target```的域名下.

## 打包后丢到web项目中的注意事项

此处是利用vue cli打包静态资源然后丢到java web中.
1. vue-router 可以直接使用hash模式 其他模式暂时没有测试
2. vue cli的打包build中的配置需要改下
```javascript
 assetsPublicPath: './',
```
3. axios在product的基本路径一定要是```./``` 其他都会引起跨域问题,此处的前端和后台都是在同一域名下,不需要设置允许跨域.
