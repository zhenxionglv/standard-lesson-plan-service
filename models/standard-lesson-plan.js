const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const schema = new Schema({
  title: String, // 标题
  target: String, // 教学内容与目标
  category: String, // 运动分类id
  grade: String, // 年级
  method: String, // 教学组织与方法
  createAt: { type: Date, default: Date.now }, // 创建时间
  createBy: String, // 创建人：运营帐号id
  level: String, // 水平
  lessonContent: String, // 课堂内容
  intensity: String, // 强度
  equipment: String, // 器材
  keyPoint: String, // 要点
  duration: Number, // 时长
})

function numPlugin(schm) {
  schm.add({ num: String });
  schm.pre('save', function (next) {
    if (this.isNew) {
      this.num = moment().format('YYYYMMDDHHmmssSSS');
    }
    next();
  });
}

schema.plugin(numPlugin);

module.exports = mongoose.model('standard_lesson_plan', schema);
