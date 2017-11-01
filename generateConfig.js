const generateConfig = ({ intl, env, target, targetFramework = 'react' }) => {
  const presets = []
  const plugins = [
    ['styled-components', {
      ssr: true,
    }],
    ['lodash', {
      id: ['lodash', 'lodash-es'],
    }],
    'react-loadable/babel',
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
      ['env', {
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
        useBuiltIns: true,
      }]
    )
  } else if (target === 'node') {
    presets.push(
      ['env', {
        modules: false,
        targets: {
          node: 'current',
        },
        useBuiltIns: true,
        debug: false,
      }],
    )

    plugins.push(
      'dynamic-import-node',
    )
  }

  presets.push(
    'react',
    'stage-1',
  )

  if (targetFramework === 'react') {
    if (env === 'development') {
      plugins.push(
        // Adds component stack to warning messages
        'transform-react-jsx-source',
        // Adds __self attribute to JSX which React will use for some warnings
        'transform-react-jsx-self',
      )
    } else if (env === 'production') {
      plugins.push(
        'transform-react-inline-elements',
        'transform-react-remove-prop-types',
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
