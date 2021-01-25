test('测试Hello World', () => {
  const ret = require('../index')
  // console.log(helloworld)

  // 断言 期望ret=== 'Hello World'
  expect(ret)
    .toBe('Hello World')
})