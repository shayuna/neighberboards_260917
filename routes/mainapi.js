var express=require("express");
var router=express.Router();

router.get("/second/*",function(req,res,next){
    res.render ("../public/main.jade");
});
router.get("/*",function(req,res,next){
    res.end ("all things must pass")
});

module.exports=router;
