// 完成文件流式写入操作


let fs = require("fs");
let ws = fs.createWriteStream("./OperateObj.js",{flags:"a"});
ws.on("open",()=>{
    console.log("我来写入文件");
})
ws.on("close", ()=>{
    console.log("我写完了");
})
ws.write("我来追加内容");
ws.close();