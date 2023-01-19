const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    first_name:{
        type: String,
        required: true
    },
    Last_name:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    }

}) ;

module.exports = mongoose.model ('employees',userSchema);