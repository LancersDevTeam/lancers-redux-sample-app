const merge = require('webpack-merge');
const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');
const baseConfig = require('./webpack.config.base.js');

const config = merge.smart(baseConfig, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './www'),
        port: 8090,
        host: '0.0.0.0',
        inline: true,
    },
    plugins: [
        new WriteFilePlugin(),
    ],
});

module.exports = config;
