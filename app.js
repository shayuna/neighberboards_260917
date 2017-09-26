var express = require("express");
var app=express();
var path=require("path");
var mainapi=require("./routes/mainapi");

app.use("/public",express.static(path.join(__dirname, 'public')));
app.use("/",mainapi);
app.listen(8080);
