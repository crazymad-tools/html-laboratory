const ObjectType = require('../model/object_type')

class ObjectTypeDao {

  async save (id, name) {
    let objectType = new ObjectType({
      id: id,
      name: name,
      createDate: new Date(),
      updateDate: new Date()
    })
    
    return await new Promise(function (resolve, reject) {
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
  }

}

module.exports = new ObjectTypeDao()