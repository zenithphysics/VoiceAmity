var mongoose = require('mongoose')
var _schema = mongoose.Schema({
    name: {
        first_name: {
            type: String,
            required: true
        },

        last_name: String
    },
    credentials:{
        user_name:String,
        password_hash:String
    },
    primary_email_id: {
        type:String,
        required:true
    },
    alternare_email_id:String,

    primary_phone_number:{type:String,required:true},
    secondary_phone_number: String,
    city:String,
    pincode:Number,
    state:String,
    country:String,
    status:{
        //Active or G Archived or F Archived
        ENUM:String
    },
    status_history:{
        archived:Array,
        G_archived:Array,
        F_archived:Array
    },
    education:{
        school_name:String,
        school_board:String
    },
    birth_info: {
        birth_year: Number,
        birth_month: Number,
        birth_date: Number,
    },
    exam_name:String,
    exam_year:String,
    created: {
        type: Date,
        default: Date.now
    }
})
var lead_db = mongoose.model('leads', _schema)

module.exports = lead_db