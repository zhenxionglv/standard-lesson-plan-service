const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: String, // 标题
  target: String, // 教学内容与目标
  category: String, // 运动分类id
  grade: String, // 年级
  method: String, // 教学组织与方法
  createAt: { type: Date, default: new Date() }, // 创建时间
  createBy: String, //创建人：运营帐号id
})

module.exports = mongoose.model('standard_lesson_plan', schema);
