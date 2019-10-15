const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
    id:{type:String, required:true},
    name:{type:String, required:true},
    password:{type:String, required:true},
    email:{type:String,required:true}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});

var Users = mongoose.model('Users', schema);

module.exports = Users;