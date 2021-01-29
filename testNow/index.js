const path = require('path')
const fs = require('fs')

module.exports = class TestNow {

  genJestSource(sourcePath = path.resolve('./')){
    const testPath = `${sourcePath}/__test__`
    if(!fs.existsSync(testPath)){
      fs.mkdirSync(testPath)
    }

    // 遍历代码文件
    let list = fs.readdirSync(sourcePath)
    // 添加完整路径
    list
      .map(v => `${sourcePath}/${v}`)
      .filter(v => fs.statSync(v).isFile()) //判断是不是一个文件
    // 排除测试代码
      .filter(v => v.indexOf('.spec') === -1)
      .map(v => this.genTestFile(v))
  }

  genTestFile(fileName) {
    console.log('fileName:', fileName)
    const testFileName = this.getTestFileName(fileName)

    // 判断从文件是否存在
    if(fs.existsSync(testFileName)){
      return console.log('该测试代码已存在: ', testFileName)
    }

    const mod = require(fileName)
    let source
    if(typeof mod === 'object') {
      // path.basename: 获取文件的文件名
      source = Object.keys(mod)
        .map(v => this.getTestSource(v, path.basename(fileName), true))
        .join('\n')
    }
    if (typeof mod === 'function') {
      const baseName = path.basename(fileName)
      source = this.getTestSource(baseName.replace('.js', ''), baseName)
    }
    fs.writeFileSync(testFileName, source)
  }

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