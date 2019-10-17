const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var schema = new Schema({
    room_maker : {type:String, required:true},
    date : {type:String},
    item : {type:String},
    title : {type:String}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});

var Test = mongoose.model('Test', schema);
module.exports = Test;