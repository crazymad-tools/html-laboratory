const mongoose = require('../lib/my-mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const ApiHost = new Schema({
    group: {
        type: ObjectId
    },
    value: {
        type: String
    },
    creator: {
        type: ObjectId,
        required: true,
        ref: 'user'
    },
    manager: { // 管理员
        type: ObjectId,
        required: true,
        ref: 'user'
    },
})
