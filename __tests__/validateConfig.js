const babel = require('babel-core')

const TRANSFORM_OPTS = { presets: ['./index.js'] }

const transpile = (code) => babel.transform(code, TRANSFORM_OPTS)

describe('Validate config', () => {
  test('should run `babel-code` without errors', () => {
    expect(
      () => transpile(`// Empty code snippet`)
    ).not.toThrowError()
  })

  test('should transpile .jsx', () => {
    const { code } = transpile(`
      <div />
    `)

    expect(code).toMatch(
      'React.createElement("div", null);'
    )
  })
})

describe('UI-Kit imports', () => {
  test('should transpile import', () => {
    const { code } = transpile(`
      import { Button, Checkbox } from '@kupibilet/ui/components'
      const fragment = [<Button />, <Checkbox />]
    `)

    expect(code).toMatch('@kupibilet/ui/components/Button')
    expect(code).toMatch('@kupibilet/ui/components/Checkbox')
  })

  test('should omit unused UI imports', () => {
    const { code } = transpile(`
      import { Button, Checkbox } from '@kupibilet/ui/components'
    `)

    expect(code).not.toMatch('@kupibilet/ui/components/Button')
    expect(code).not.toMatch('@kupibilet/ui/components/Checkbox')
  })

  test('should transpile mq impor', () => {
    const { code } = transpile(`
      import { mq } from '@kupibilet/ui/utils'
      mq.mobile()
    `)

    expect(code).toMatch('@kupibilet/ui/utils/media-queries.js')
  })

  test('old-style named import should be the same', () => {
    const { code } = transpile(`
      import { SuggestionsContainer } from '@kupibilet/ui/components/Autocomplete/styled'
      import { TabPane, TabBar, Tab } from '@kupibilet/ui/components/Tabs'
      const fragment = [<SuggestionsContainer />, <TabPane />, <TabBar />, <Tab />]
    `)

    expect(code).toMatch('"@kupibilet/ui/components/Autocomplete/styled"')
    expect(code).toMatch('"@kupibilet/ui/components/Tabs"')
  })
})
