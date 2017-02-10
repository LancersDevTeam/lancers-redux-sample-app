const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const baseConfig = require('./webpack.config.base.js');

const config = merge.smart(baseConfig, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './www'),
        port: 8090,
        host: '0.0.0.0',
        inline: true,
        hot: true,
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: '\u001b[32m',
            },
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new StyleLintPlugin({ files: 'src/**/*.css' }),
        new WriteFilePlugin(),
    ],
});

module.exports = config;
