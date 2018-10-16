const babel = require('babel-core')
const { presets, plugins } = require('../')

describe('Validate config:', () => {
  const transformOpts = {
    presets,
    plugins,
  }

  test('should run `babel-code` without errors', () => {
    expect(
      () => babel.transform(`// Empty code snippet`, transformOpts)
    ).not.toThrowError()
  })
  test('should transpile .jsx', () => {
    const { code } = babel.transform(`<div />`, transformOpts)

    expect(code).toMatch(
      'React.createElement("div", null);'
    )
  })
})
