// test('callback', done => {
//   const {callback} = require("../index");
//   callback()
//   // 延迟1s结束
//   setTimeout(done, 1000)
// })
//
// test('promise', done => {
//   const {promise} = require("../index");
//   promise()
//   // 延迟1s结束
//   setTimeout(done, 1000)
// })

// test('Generator', done => {
//   const {generator} = require('../index')
//   generator()
//   setTimeout(done, 1000)
// })

test('event', done => {
  const {event} = require('../index')
  event()
  setTimeout(done, 1000)
})