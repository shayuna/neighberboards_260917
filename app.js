var express = require("express");
var app=express();
var mainapi=require("./routes/mainapi");

app.use("/",mainapi);
app.listen(8080);
