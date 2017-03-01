const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  schoolyear: String,
  term: Number,
  grade: String,
  outline: {
    week: Number,
    lessons: {
      lesson: Number,
      content: String,
    }
  },
  createAt: Date,
  updateAt: Date,
  createBy: String,
})

module.exports = mongoose.model('lesson_plan_outline', schema);