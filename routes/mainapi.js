var express=require("express");
var path=require("path");
var router=express.Router();

router.get("/second/*",function(req,res,next){
    res.render ("../public/main.jade");
});
router.get("/third/*",function(req,res,next){
    res.sendFile (path.resolve("./public/t1.htm"));
});
router.get("/*",function(req,res,next){
    res.end ("the joke is on you");
});

module.exports=router;
