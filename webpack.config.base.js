const path = require('path');
const webpack = require('webpack');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

require('dotenv').config();

const config = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve('www/js/'),
        filename: 'bundle.js',
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                use: 'eslint-loader',
                exclude: /node_modules/,
            },
        ],
        rules: [
            {
                test: /\.js$/,
                use: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style', 'css?modules'],
            },
            {
                test: /\.json$/,
                use: 'json',
            },
        ],
    },
    eslint: {
        configFile: './.eslintrc.yaml',
        fix: true,
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new FlowStatusWebpackPlugin({
            binaryPath: './node_modules/.bin/flow',
            failOnError: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
};

module.exports = config;
