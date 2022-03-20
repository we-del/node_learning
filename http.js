// 我来创建一个http请求

class OpenHttp {
    constructor() {
        this.http = require("http");
        this.server = null;
        this.qs = require("querystring");
    }

    start() {
        this.server = this.http.createServer((req, res) => {
            let msg = req.url.split('?')[1];
            console.log("msg" + msg);
            console.log("t ", (this.qs.parse(msg)));
            res.setHeader('content-type', 'text/html;charset=utf8');
           // res.end("<h1>我来返回数据</h1>>");
            res.end(JSON.stringify("返回数据到客户端"));
        });
        this.server.listen(5000, () => console.log("端口监听中"));
    }
}

new OpenHttp().start();