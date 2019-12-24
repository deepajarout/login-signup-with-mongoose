var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
// name:{type:String}
name:String,
username:String,
email:String,
mobile:Number,
password:String

});

module.exports = mongoose.model('user',userSchema);