var express = require('express')
var router = express.Router()
var uploadJob = []
var mongoose = require('mongoose')
var multer = require('multer')
const fs = require('fs')
const csv_parser = require('csv-parser')
var leads_db = require('./model.js')
var dynamicLeads = multer({
    dest: 'dynamicLeads/'
})


mongoose.connect('mongodb+srv://VoiceAmity:voiceamity@123@cluster0-f2sqk.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(function () {
        console.log("Upload-server Database Connection Established")
    })
    .catch(function (err) {
        console.log("Unable to Connect ERR:" + err)
    })



router.use(function (req, res, next) {
    var auth = true
    //Authentication Logic
    console.log(req.headers.authorization)
    if (auth == true) {
        next()
    } else {
        res.sendStatus(403)
        res.end()
    }
})


function addDataToLeads(fileMetadata) {

    var document_array = []
    var newUploadJob = {
        jobId: uploadJob.length + 1,
        path: fileMetadata.path,
        size: fileMetadata.size,
        jobStatus: true
    }
    uploadJob.push(newUploadJob)
    fs.createReadStream(fileMetadata.path)
        .pipe(csv_parser())
        .on('data', function (data) {
            var obj = {
                name: {
                    firstName:data.first_name,
                    lastName: data.last_name
                },
                email:data.email,
                phone_no:JSON.stringify(data.phone_number),
                birth_info:{
                    birth_year:data.birth_year,
                    birth_month:data.birth_month,
                    birth_date:data.birth_day,
                }
            }
          document_array.push(obj)
        })
        .on('end', function () {
            console.log(document_array)
            leads_db.insertMany(document_array,function(err,res){
               if(err){
                   console.log(err)
             } 
               else{
                   console.log("successfully inserted")
                   fs.unlinkSync(fileMetadata.path)
               }
            })
            
            console.log(uploadJob)
        });



}
router.post('/admin-upload/leads/', dynamicLeads.single('leadsData'), function (req, res) {

    addDataToLeads(req.file)
    res.send('file queued for insertion SIZE:'+req.file.size)
})
module.exports = router