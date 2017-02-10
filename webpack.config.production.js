const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = merge(baseConfig, {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'eslint-loader',
                    options: {
                        configFile: path.resolve(__dirname, '.eslintrc.yaml'),
                        fix: false,
                    }
                }],
                enforce: 'pre',
                include: [ path.resolve(__dirname, 'src') ],
                exclude: [ /node_modules/, /test/ ],
            },
        ],
    },
    devtool: 'source-map',
    output: {
        sourceMapFilename: 'bundle.js.map',
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            output: {
                comments: false,
            },
        })
    ],
});

module.exports = config;
