const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/api-mock-test')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ObjectType = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
})

const ObjectTypeModel = mongoose.model('ObjectType', ObjectType)
const instance = new ObjectTypeModel({
    author: new mongoose.Types.ObjectId(),
    title: 'test',
    body: 'dasdad',
    date: new Date()
})

async function setTest() {
    let res = await new Promise(function (resolve, reject) {
        instance.save(function (err, res) {
            // console.log(err)
            // console.log(res)
            if (err) {
                reject(err)
            } else  {
                resolve(res)
            }
        })
    })
    console.log(res)
    process.exit(0)
}
setTest()
