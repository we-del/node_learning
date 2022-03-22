let fs = require("fs");
let express = require("express");
let app = express();
app.listen(8000);
console.log(typeof express);
// 我来编写注释  tsc -w 对所有ts进行监听，一有更改立刻编译
app.get("/",(req:any,res:any):void=>{
    console.log("我是用ts完成了node的编写");
    res.send("ok");
});
