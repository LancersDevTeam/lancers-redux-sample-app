const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = merge(baseConfig, {
    eslint: {
        configFile: './.eslintrc.yaml',
        fix: false,
    },
    devtool: 'source-map',
    output: {
        sourceMapFilename: 'bundle.js.map',
    },
});

module.exports = config;
