let express = require("express")

// 读cookie数据需要一个中间件 cookie-parser
let cookieParser = require('cookie-parser')
let app = express()


app.listen(7777, (err) => {
    console.log('7777端口监听中 连接成功')
})
app.use(cookieParser()) // 使用cookieParser 中间件,这样才可以读取cookie数据

app.get('/', function (req, res) {
    // res.cookie('str(key)','str(value)'[,time(销毁时间，单位为ms)]) 种持久cookie
    // res.cookie('str','value') 种会话cookie
    res.cookie('name', JSON.stringify({a: 1, b: 2}), {maxAge: 1000 * 60})
    console.log(req.cookies) // 读取cookie数据，需要借助cookie-parser中间件

    //删除cookie,让其生命周期变为0
    // res.cookie('指定cookie','',{maxAge:0})
    // res.clearCookie('指定cookie')
    res.send(req.cookies + 'ok')
})