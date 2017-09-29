var express=require("express");
var path=require("path");
var router=express.Router();
var mongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/mine";

router.get("/second/*",function(req,res,next){
    res.render ("../public/main.jade");
});
router.get("/third/*",function(req,res,next){
    res.sendFile (path.resolve("./public/t1.htm"));
});
router.get("/pullData",function(req,res){
    mongoClient.connect(url,function(err,db){
        if (!err){
/*
            db.collection("first").find({billy:{$gte:91}}).toArray(function(err,arDocs){
               var sRslt="";
               arDocs.forEach(function(oDoc,ii){
                    sRslt+=" *** "+oDoc.billy;
               });
*/

            db.collection("first").find({}).toArray(function(err,arDocs){
               var sRslt="";
               sRslt=JSON.stringify(arDocs);
/*
               arDocs.forEach(function(oDoc,ii){
                    sRslt+=" *** "+oDoc.billy;
               });
*/
               db.close();
               res.end(sRslt);
            })
/*
            db.collection("first").find({billy:{$gt:90}}).forEach(function(rslt){
                console.log("billy here says - "+rslt.billy);
                res.end("ok");
            })


*/            
//            db.close();
        }
        else
        {
            console.log ("error in pullData- " + err.message);
        }
    })

//    res.end ("got to pullData pg");
})

router.get("/putData",function (req,res,next){
    mongoClient.connect(url,function(err,db){
        if (!err){
            var oDoc={ser:1357,billy:189};
            db.collection("first").insertOne(oDoc,function(err,rslt){
                if (err){
                    console.log ("an err in inserting data phase. err is - "+err.message);
                    res.end ("err");
                }
                else{
                    console.log("inserting the data succeeded");
                    res.end ("no err");
                }
            })
        }
        else{
            console.log("error in put Data - "+err.message);
        }
    
    })
})
router.get("/chkReq",function(req,res,next){
    res.end ("got to chkReq");
})

router.get("/*",function(req,res,next){
    res.end ("the joke is on you");
})

module.exports=router;
