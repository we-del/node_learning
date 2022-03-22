"use strict";
var Express_ = /** @class */ (function () {
    function Express_() {
        this.express = require("express");
        this.cookieParser = require("cookie-parser");
        this.app = this.express();
        this.app.listen(9999, function (err) {
            console.log("9999端口监听中");
        });
        // 使用cookie解析器(中间件)，此时会对cookie进行解析，并在req下挂载一个属性 req.cookies
        // req.cookies是一个对象，其中收集了所有cookie
        this.app.use(this.cookieParser());
        this.setRoute(); // 开启路由监听
    }
    Express_.prototype.setRoute = function () {
        this.app.get("/", function (req, res) {
            // 给客户端种下一个会话cookie,该cookie在浏览器关闭时会消失
            // cookie必须在服务端有反馈前在服务端种下
            //res.cookie("msg",JSON.stringify(obj)); // 会话cookie
            // res.cookie("msg",JSON.stringify(obj),{maxAge:10000*10}); // 持久化cookie
            res.cookie("msg0", JSON.stringify({ a: 1, b: 2 }), { maxAge: 1000 * 1000 });
            res.cookie("msg1", JSON.stringify({ ca: 1, wb: 2 }), { maxAge: 1000 * 1000 });
            console.log(req.cookies); // 拿到所有的cookies是一个对象
            // 删除cookie
            // res.cookie("msg0","",{maxAge:0}); // 此方法强行重置key为msg0的cookie时间
            res.clearCookie("msg0"); // 此方法为清除指定key的cookie
            res.clearCookie("msg");
            res.send(req.cookies + " cookie已经种下了");
        });
    };
    return Express_;
}());
new Express_();
