test('测试声称自动化测试代码', () => {
  const src = new (require('../index'))()
  const ret = src.getTestSource('fun', 'class')
  console.log('ret: ', ret)
  expect(ret)
    .toBe(`
      test('TEST fun', () => {
        const fun = require('../class')
        const ret = fun()
        // expact(ret)
        //   .toBe('test return')
      })
    `)
})

// test('测试文件名声称', () => {
//   const src = new (require('../index'))()
//   const ret = src.getTestFileName('/abc/class.js')
//   console.log('getTestFileName: ', ret)
//   expect(ret)
//     .toBe('/abc/__test__/class.spec.js')
// })