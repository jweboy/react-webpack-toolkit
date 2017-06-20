function Flexible(options) {
  this.options = options
}

Flexible.prototype.apply = function (compiler) {
  const paths = this.options.paths

  compiler.plugin('compilation', (compilation) => {
    // console.log(compilation)

    compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData, callback) => {
      paths.map((path) => {
        console.log(htmlPluginData.assets.js)
        return htmlPluginData.assets.js.unshift(path)
      })
      callback(null, htmlPluginData)
    })
  })
}

module.exports = Flexible
