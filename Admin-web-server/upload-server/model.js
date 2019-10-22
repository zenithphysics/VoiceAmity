var mongoose =  require('mongoose')
var _schema = mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true
        },
        
        lastName: String
    },
    email:String,
    phone_no:String,
    birth_info:{
        birth_year:Number,
        birth_month:Number,
        birth_date:Number,
    },
    created: { 
        type: Date,
        default: Date.now
    }
})

var lead_db = mongoose.model('leads',_schema)

module.exports = lead_db