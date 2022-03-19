const fs = require("fs");

let rs = fs.createReadStream("./OperateObj.js",{highWaterMark:1024*1024*1024});
rs.on("close",()=>{
    console.log("读完了");
});
rs.on("open", (t)=>{console.log(t);})
rs.on("data",(data)=>{
    console.log(data.toString());
})