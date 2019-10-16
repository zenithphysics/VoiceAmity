var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Cat = mongoose.model('user', { name: String,uname:String,email:String,password:String,portalRoles:Object });
mongoose.connect('mongodb+srv://VoiceAmity:voiceamity@123@cluster0-f2sqk.mongodb.net/user?retryWrites=true&w=majority',
 { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true }
 ).then(()=>{ console.log("connection to database established") })
 .catch(err=>console.log("error hai bhai"))
 
console.log()
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/kitty', function(req, res, next) {
  

const kitty = new Cat({ name: 'mohinesh sharma',uname:'mohinesh9999',email:'mohineshsharma9999@gmail.com'
,password:"hello world",portalRoles:{canupload:[true,true,true,true],
  telecall:[true,true,true,true],cancreatecallinglist:[true,true,true,true]} });
kitty.save().then(() => console.log('meow'));
  res.render('index', { title: 'Express' });
});
module.exports = router;
