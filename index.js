const generateConfg = require('./generateConfig')

const config = generateConfg({
  intl: process.env.INTL_ENV,
  env: process.env.NODE_ENV,
  target: process.env.TARGET_ENV,
  babelPresetModules: process.env.BABEL_PRESET_MODULES,
})

module.exports = () => config
