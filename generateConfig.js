const generateConfig = ({ intl, env, target }) => {
  const presets = []
  const plugins = []

  if (intl) {
    plugins.push(
      ['react-intl', {
        messagesDir: 'extractedMessages',
      }]
    )

    return {
      presets,
      plugins,
    }
  }

  if (target === 'browser') {
    presets.push(
      ['env', {
        modules: false,
        targets: {
          ie: 11,
        },
      }]
    )
  } else if (target === 'node') {
    presets.push(
      ['env', {
        // TODO: включать модули только в режиме разработке, в продакшене отдавать билд вебпака
        // modules: false,
        targets: {
          node: 'current',
        },
        exclude: [
          'transform-async-to-generator',
          'transform-regenerator',
        ],
        debug: false,
      }]
    )

    plugins.push(
      'dynamic-import-node'
    )
  }

  presets.push(
    'react',
    'stage-1'
  )

  if (env === 'development') {
    plugins.push(
      // Adds component stack to warning messages
      'transform-react-jsx-source',
      // Adds __self attribute to JSX which React will use for some warnings
      'transform-react-jsx-self'
    )
  } else if (env === 'production') {
    plugins.push(
      'transform-react-inline-elements',
      'transform-react-remove-prop-types'
    )
  }

  return {
    presets,
    plugins,
  }
}

module.exports = generateConfig
