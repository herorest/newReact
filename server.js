var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.dev.config');
var mock = require('./mock.js');
var config = require('./config');
var app = express();
var port = process.env.PORT || config.dev.port;

var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function() {
        hotMiddleware.publish({
            action: 'reload'
        })
    })
});

mock(app);
app.use(devMiddleware)
app.use(hotMiddleware)
app.use(express.static('./src'));

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function() {
    console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
})
