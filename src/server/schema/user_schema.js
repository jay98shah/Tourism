var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    username : String,
    password : String,
    emailId : String ,
    mobile : String,
});

var User = mongoose.model('user',UserSchema);
module.exports = User;