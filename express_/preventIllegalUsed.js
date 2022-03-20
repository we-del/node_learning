let express = require("express");
let app = express();
app.listen(8000,(err)=>{console.log("localhost:8000 端口监听中");});
app.use("/",(req,res)=>{
    req.referenceNode
});