const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ObjectType = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  },
  createDate: {
    type: Date
  },
  updateDate: {
    type: Date
  }
})

module.exports = mongoose.model('ObjectType', ObjectType)