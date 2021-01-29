const fs = require('fs')

test('集成测试 测试生成测试代码文件', () => {
  // 准备环境
  // 删除测试文件夹
  fs.rmdirSync(__dirname + '/data/__test__', {
    recursive: true // 如果文件夹中有文件，一起删掉
  })
  const src = new (require('../index'))()
  src.genJestSource(__dirname + '/data')
})

// test('测试生成自动化测试代码', () => {
//   const src = new (require('../index'))()
//   const ret = src.getTestSource('fun', 'class')
//   console.log('ret: ', ret)
//   expect(ret)
//     .toBe(`
//       test('TEST fun', () => {
//         const fun = require('../class')
//         const ret = fun()
//         // expact(ret)
//         //   .toBe('test return')
//       })
//     `)
// })

// test('测试文件名声称', () => {
//   const src = new (require('../index'))()
//   const ret = src.getTestFileName('/abc/class.js')
//   console.log('getTestFileName: ', ret)
//   expect(ret)
//     .toBe('/abc/__test__/class.spec.js')
// })