const path = require('path')
module.exports = class TestNow {

  getTestSource(methodName, classFile, isClass = false) {
    console.log('getTestSource: ', methodName)
    return `
      test('TEST ${methodName}', () => {
        const ${isClass ? `{${methodName}}` : methodName} = require('../${classFile}')
        const ret = ${methodName}()
        // expact(ret)
        //   .toBe('test return')
      })
    `
  }

  /**
   * 生成测试文件名
   * @param fileName 代码文件名
   * @returns {string} 生成文件名
   */
  getTestFileName(fileName) {
    // step1 拆开文件名
    const dirName = path.dirname(fileName) // 目录名
    const baseName = path.basename(fileName) // 文件名
    const extName = path.extname(fileName) // 扩展名
    const testName = baseName.replace(extName, `.spec${extName}`)
    return path.format({
      root: dirName + '/__test__/',
      base: testName
    })
  }
}