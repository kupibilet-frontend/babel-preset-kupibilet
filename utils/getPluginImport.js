const getPluginImport = (libraryName,  camel2Dash = false) => {
   const pluginsImport = ['import', {
        libraryName,
        libraryDirectory: "",
        camel2DashComponentName: camel2Dash,
    }, libraryName]
    if (libraryName.includes('utils')){
        pluginsImport[1].customName = (name) => {
            if(['mq'].includes(name)) {
              return "@kupibilet/ui/utils/media-queries.js"
            }
            return `@kupibilet/ui/utils/${name}`
          }
    }

    return pluginsImport
}

module.exports = {
    getPluginImport,
}
