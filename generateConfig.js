const generateConfig = ({ intl, env, target, targetFramework = 'react' }) => {
  const presets = [
    '@babel/preset-react',
    '@babel/preset-flow',
  ]
  const plugins = [
    ['styled-components', {
      ssr: true,
    }],
    ['lodash', {
      id: ['lodash', 'lodash-es'],
    }],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-async-generator-functions',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-exponentiation-operator',
    ['@babel/plugin-proposal-decorators', {
      decoratorsBeforeExport: true,
    }],
    'babel-plugin-syntax-trailing-function-commas',
    '@7rulnik/react-loadable/babel',
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
        modules: false,
        targets: {
          ie: 11,
        },
        exclude: [
          'es6.weak-map',
          'es6.weak-set',
          'es6.typed.array-buffer',
          'es6.typed.data-view',
          'es6.typed.int8-array',
          'es6.typed.uint8-array',
          'es6.typed.uint8-clamped-array',
          'es6.typed.int16-array',
          'es6.typed.uint16-array',
          'es6.typed.int32-array',
          'es6.typed.uint32-array',
          'es6.typed.float32-array',
          'es6.typed.float64-array',
          'es6.math.acosh',
          'es6.math.asinh',
          'es6.math.atanh',
          'es6.math.cbrt',
          'es6.math.clz32',
          'es6.math.cosh',
          'es6.math.expm1',
          'es6.math.fround',
          'es6.math.hypot',
          'es6.math.imul',
          'es6.math.log1p',
          'es6.math.log10',
          'es6.math.log2',
          'es6.math.sign',
          'es6.math.sinh',
          'es6.math.tanh',
          'es6.math.trunc',
          'es6.reflect.apply',
          'es6.reflect.construct',
          'es6.reflect.define-property',
          'es6.reflect.delete-property',
          'es6.reflect.get',
          'es6.reflect.get-own-property-descriptor',
          'es6.reflect.get-prototype-of',
          'es6.reflect.is-extensible',
          'es6.reflect.own-keys',
          'es6.reflect.prevent-extensions',
          'es6.reflect.set',
          'es6.reflect.set-prototype-of',
          'es6.number.is-finite',
          'es6.number.is-integer',
          'es6.number.is-safe-integer',
          'es6.number.is-nan',
          'es6.number.epsilon',
          'es6.number.min-safe-integer',
          'es6.number.max-safe-integer',
        ],
        useBuiltIns: 'entry',
      }]
    )
  } else if (target === 'node') {
    presets.push(
      ['@babel/preset-env', {
        modules: false,
        targets: {
          node: 'current',
        },
        useBuiltIns: 'entry',
      }],
    )

    plugins.push(
      'dynamic-import-node',
    )
  }

  if (targetFramework === 'react') {
    if (env === 'production') {
      plugins.push(
        'transform-react-inline-elements',
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
