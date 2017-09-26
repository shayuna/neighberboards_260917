var express=require("express");
var router=express.Router();

router.get("/second/*",function(req,res,next){
    res.end ("in second. hooray")
});
router.get("/*",function(req,res,next){
    res.end ("all things must pass")
});

module.exports=router;
