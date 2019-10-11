const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
  content: {type: String},
  createdAt: {type: Date, default: Date.now}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});

var Test = mongoose.model('Test', schema);

module.exports = Test;