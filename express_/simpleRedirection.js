const express = require("express");
let app = express(); // 开启服务器
app.listen(7000,()=>console.log("localhost:7000 监听中"));

// 我是一个简单拦截中间件，用于开始导航前做信息校验限制(身份是否合法等)
app.use((req,res,next)=>{
    next();
});

app.use('/user',(req,res)=>{
    res.send("我是user页面");
});
// app.use('/',(req,res)=>{
//     res.send("我是主页面");
// })
// 我是一个后端拦截中间件，主要做页面重定向
app.use((req,res,next)=>{
    console.log("开始重定向");
    res.redirect("/user");  // 重定向是重定向路由
});