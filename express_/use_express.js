const express = require("express");
let app = express();
app.listen(4000, () => {
    console.log("4000端口监听中！~~");
});


app.use("/", (req, res) => {
    res.send("欢迎来到主页面");
});

app.use("/user/:user", (req, res) => {
    res.send("欢迎" + req.params.user + "来到分页面");
});