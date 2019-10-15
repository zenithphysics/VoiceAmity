var express = require('express')
var app = express();
app.get('/',function(req,res){
    res.end("VoiceAmity-web-server Is Up")
})
app.listen(3000,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("VoiceAmity-web-server Is Up")
    }
})