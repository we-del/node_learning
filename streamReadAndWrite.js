
let fs = require("fs");
let rs = fs.createReadStream("./OperateObj.js");
let ws = fs.createWriteStream("./OperateObj_copy.js");

rs.on("open",()=>{
    console.log("开始文件操作");

});
rs.on("data", (thunk)=>{
    ws.write(thunk);
});

rs.on("close",()=>{
    console.log("关闭流");
    ws.close();
});
ws.on("close",()=>{console.log("读流关闭了");});
