const mongoose = require('../lib/my-mongoose')
const Schema = mongoose.Schema

const ObjectType = new Schema({
  name: String,
  createDate: Date,
  updateDate: Date
})

module.exports = mongoose.model('ObjectType', ObjectType)