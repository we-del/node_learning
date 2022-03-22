let express = require("express");
let app = express();
app.listen(7777);

app.use(express.static(__dirname+"/asserts"));

app.use((req,res)=>{
   console.log(typeof req);
   console.log(typeof res);
});

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/asserts/register.html");
});

app.post("/login",(req,res)=>{
    res.sendFile(__dirname+"/asserts/login.html");
});