const getUiKitImportPlugin = (space, camel2DashComponentName = false, customName) => {
  const fullImportPath = '@kupibilet/ui/' + space

  const pluginOpts = {
    libraryName: fullImportPath,
    libraryDirectory: '',
    camel2DashComponentName,
  }

  if (customName) {
    return ['import', { ...pluginOpts, customName }, fullImportPath]
  }

  return ['import', pluginOpts, fullImportPath]
}

module.exports = [
  getUiKitImportPlugin('components'),
  getUiKitImportPlugin('blocks'),
  getUiKitImportPlugin('utils', false, (name) => {
    if(['mq'].includes(name)) {
      return '@kupibilet/ui/utils/media-queries.js'
    }
    return `@kupibilet/ui/utils/${name}`
  }),
]
