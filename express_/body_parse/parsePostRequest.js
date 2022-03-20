const express = require("express");
const bodyParser = require("body-parser");
let app = express();
app.listen(9000,()=> console.log("9000端口 监听中"));

// 使用post携带参数中间件
// 此中间件可以解析post请求体里携带的参数并以对象形式挂载到req上
//app.use(bodyParser.urlencoded({extended: true}));

// express下也挂载了一个和bodyParser相同功能的中间件可以对post请求进行解析
app.use(express.urlencoded({extended:true}));
app.post("/", (req, res) => {
    let {name, age} = req.body;
    res.send(name + "_" + age);
});
app.get("/ww",(req,res)=>{
    res.send("我来设置一个路由");
});
app.get("/",(req,res)=>{
    res.send("我来匹配路由");
});