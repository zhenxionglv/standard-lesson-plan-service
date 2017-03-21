const mongoose = require('mongoose');

class Service {
  constructor(model) {
    this.Model = mongoose.model(model);
  }
  // 创建
  create(msg, done) {
    return new this.Model(msg.data)
      .save()
      .then((data) => {
        done(null, { success: true, msg: '创建成功', data });
      }).catch(done);
  }

  // 通过id查询
  findById(msg, done) {
    const id = msg.data.id;
    return this.Model.findById(id).then((result) => {
      // 返回数据非空校验
      if (!result) {
        return done(null, { success: false, msg: '该数据不存在' });
      }
      return done(null, { success: true, data: result });
    });
  }

  // 查询
  find(msg, done) {
    const filters = msg.data.filters || {};
    const sort = msg.data.sort || { updatedAt: -1 };
    const skip = msg.data.skip || 0;
    const limit = msg.data.limit || 20;
    return this.Model
      .find(filters) // 条件,过滤密码相关字段
      .sort(sort) // 排序
      .limit(limit) // 单页返回数量
      .skip(skip) // 略过数据条数
      .then(result => done(null, { success: true, msg: '获取成功', data: result }))
      .catch(done);
  }

  // 获取数量
  count(msg, done) {
    const filters = msg.data.filters || {};
    return this.Model
      .count(filters)
      .then(result => done(null, { success: true, msg: '获取成功', data: result }))
      .catch(done);
  }

  // 更新
  update(msg, done) {
    const roleId = msg.data.id;
    const data = msg.data;
    delete data.id;
    // 更新
    return this.Model
      .findByIdAndUpdate(roleId, data, { new: true })
      .then((result) => {
        if (!result) {
          return done(null, { success: false, msg: '该数据不存在' });
        }
        return done(null, { success: true, msg: '修改成功', data: result });
      }).catch(done);
  }
// 删除
  delete(msg, done) {
    const id = msg.data.id;
    return this.Model
      .findByIdAndRemove(id)
      .then((result) => {
        if (!result) {
          return done(null, { success: false, msg: '该数据不存在' });
        }
        return done(null, { success: true, msg: '删除成功' });
      })
      .catch(done);
  }
}
module.exports = Service;
