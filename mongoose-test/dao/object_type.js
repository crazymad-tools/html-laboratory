const ObjectType = require('../model/object_type')
const mongoose = require('mongoose')

class ObjectTypeDao {

  async save (name) {
    let objectType = new ObjectType({
      name: name,
      createDate: new Date(),
      updateDate: new Date()
    })
    console.log(objectType)

    let res =  await new Promise(function (resolve, reject) {
      console.log('进入Promise')
      objectType.save(function (err, res) {
        console.log(err)
        console.log(res)
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })

    return res
  }

}

module.exports = new ObjectTypeDao()