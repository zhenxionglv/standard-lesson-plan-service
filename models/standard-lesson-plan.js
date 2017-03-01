const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: String,
  category: String,
  target: String,
  method: String,
  createAt: Date,
  updateAt: Date,
  createBy: String,
})

module.exports = mongoose.model('standard_lesson_plan', schema);