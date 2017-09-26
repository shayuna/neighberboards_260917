var express = require("express");
var app=express();
console.log("for the first time");
app.get("/*",function(req,res,next){
  res.end("this is nice");
});

app.listen(8080);
