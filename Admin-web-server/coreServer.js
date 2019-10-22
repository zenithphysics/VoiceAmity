var express = require('express')
var app = express();
var uploadApi = require('./upload-server/upload-server')
app.get('/',function(req,res){
    res.end("VoiceAmity-web-server Is Up")
})
app.use('/api/v1',uploadApi)
app.listen(3000,function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("VoiceAmity-web-server Is Up")
    }
})