var express = require('express')
var app = express();
app.get('/',function(req,res){
    res.end("telecaller Is Up")
})
app.listen(5000,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("telecaller Is Up")
    }
})