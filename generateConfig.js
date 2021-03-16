const uiKitImportPlugins = require('./parts/plugins/ui-kit-import')

const generateConfig = ({ intl, env, target, babelPresetModules = false, targetFramework = 'react' }) => {
  const isDev = env === 'development'
  const presets = [
    ['@babel/preset-react', {
      development: isDev,
      useBuiltIns: true,
    }],
    '@babel/preset-flow',
  ]
  const plugins = [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true,
        "minify": true,
        "transpileTemplateLiterals": true,
        "pure": true,
        "displayName": true,
        "preprocess": false
      }
    ],
    ['lodash', {
      id: ['lodash', 'lodash-es'],
    }],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-syntax-trailing-function-commas',
    'babel-plugin-transform-export-extensions',
    '@7rulnik/react-loadable/babel',
    ...uiKitImportPlugins,
  ]

  if (intl) {
    plugins.push(
      ['react-intl', {
        messagesDir: 'extractedMessages',
      }],
    )

    return {
      presets,
      plugins,
    }
  }

  if (target === 'browser') {
    presets.push(
      ['@babel/preset-env', {
        modules: babelPresetModules,
        targets: {
          ie: 11,
        },
        useBuiltIns: 'entry',
        corejs: 3,
      }]
    )
  } else if (target === 'node') {
    presets.push(
      ['@babel/preset-env', {
        modules: babelPresetModules,
        targets: {
          node: 'current',
        },
        useBuiltIns: 'entry',
        corejs: 3,
      }],
    )

    plugins.push(
      'dynamic-import-node',
    )
  }

  if (targetFramework === 'react') {
    if (env === 'production') {
      plugins.push(
        '@babel/plugin-transform-react-inline-elements',
        'transform-react-remove-prop-types',
      )
    } else if (env === 'test') {
      plugins.push(
        '@babel/plugin-transform-modules-commonjs',
      )
    }
  } else if (targetFramework === 'preact') {
    plugins.push(
      'transform-react-remove-prop-types',
    )
  }

  return {
    presets,
    plugins,
  }
}

module.exports = generateConfig
