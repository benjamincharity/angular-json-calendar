var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var path = require('path');
var libraryName = 'angular-json-calendar';


var config = {
    entry: {
        'angular-json-calendar': './src/index.js',
        'angular-json-calendar.min': './src/index.js',
    },
    devtool: 'inline-source-map',
    output: {
        path: __dirname + '/dist',
        filename: "[name].js",
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'ng-annotate',
                    'babel?presets[]=es2015'
                ],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(html|svg)$/,
                loader: 'ngtemplate!html'
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};

module.exports = config;

