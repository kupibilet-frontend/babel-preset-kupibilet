const generateConfg = require('./generateConfig')

const config = generateConfg({
  intl: process.env.INTL_ENV,
  env: process.env.NODE_ENV,
  target: process.env.TARGET_ENV,
})

module.exports = () => config
