const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema  = new Schema({ 
  room_maker : {type:String, required:true},//개설자
  createdAt: {type: Date, default: Date.now},//개설날짜
  deadline : [String],//모집기한
  category : [String],//카테고리
  item : {type:String, required:true},//품목
  title : {type:String},//방제목
  comment : {type:String},//하고싶은 말
  picture_url : {type:String}
},{
  toJSON:{virtuals:true},
  toObject: {virtuals: true}
});

var Itemboard = mongoose.model('Itemboard', schema );
module.exports  = Itemboard;
