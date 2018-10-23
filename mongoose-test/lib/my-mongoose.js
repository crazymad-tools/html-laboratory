const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/api-mock-test')

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open now')
})

mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error:' + err)
})

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected')
})

module.exports = mongoose
