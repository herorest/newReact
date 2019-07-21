var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var {CleanWebpackPlugin} = require('clean-webpack-plugin');
var es3ifyPlugin = require('es3ify-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var srcDir = path.resolve(process.cwd(), 'src');
var plugins = [];
var assets = 'assets/';
var publicPath = '/'; // 发布路径，这里不用绝对路径的话css引用的图片最终路径会不对，生成的是url(css/imm/xx.png);

var entries = (function(){
    var jsDir = path.resolve(srcDir, 'js/app')
    var entryFiles = glob.sync(jsDir + '/*.{js,jsx}')
    var map = {}

    entryFiles.forEach((filePath) => {
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        map[filename] = filePath
    })
    return map;
})();



plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false, 
    }),
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
    new es3ifyPlugin()
];

var entryHtml = glob.sync(srcDir + '/*.html');

entryHtml.forEach(function(filePath) {
    var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    var conf = {
        template: filePath,
        filename: filename + '.html'
    };
    if(filename in entries) {
        conf.inject = 'body';
        conf.chunks = ['common', filename];
    }
    plugins.push(new HtmlWebpackPlugin(conf));
});

var config = {
    mode: 'development', 

    devtool: 'source-map',

    entry: entries,

    output: {
        path: path.resolve(__dirname, assets),
        filename: 'js/[name].js?[hash]',
        chunkFilename: 'js/chunk-[chunkhash:8].js',
        publicPath: publicPath
    },

    resolve: {
        extensions: ['.js', '.css', '.scss', '.less', '.png', '.jpg','.gif'],
        alias: {
            'react': 'anujs',
            'react-dom': 'anujs'
        }
    },

    module: {
        rules: [
            {
                test: /\.(svg|jpe?g|png|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        publicPath: 'css/',
                        hmr: process.env.NODE_ENV === 'development',
                      },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: plugins,

    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            automaticNameMaxLength: 30,
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
};

module.exports = config;
