# babel-preset-kupibilet

> Configurable preset that supports transforming JS both for client and server

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": "babel-preset-kupibilet"
}
```
By default this preset takes into account three things from the environment:

- INTL_ENV
- NODE_ENV
- TARGET_ENV

**You can also set the config in explicit way:**

```js
const generateConfig = require('babel-preset-kupibilet/generateConfig')
const config = generateConfig({intl: true, env: 'development', target: 'node'})
```

generateConfig is a function that takes an options object with following settings: 

- intl (if present - adds react-intl plugin with 'extractedMessages' set as directory)
- env ('production' or 'development')
- target (must be set as 'browser' or 'node')

**List of default presets:**

- 'react'
- 'stage-1'

For browser there would be modules: false and ie11+ set as target environment

For node this preset has dynamic imports and **does not include** 'transform-async-to-generator' and 'transform-regenerator' options to make the bundle smaller,
**cause Node.js supports async/await natievly**.

For development mode preset has plugins to display components stack and better JSX tracking for React warnings.




