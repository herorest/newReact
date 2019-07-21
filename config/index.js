var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, '../assets/index.html'),
    assetsRoot: path.resolve(__dirname, '../assets'),
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    port: 8080,
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}
