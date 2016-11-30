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
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css?modules'],
            },
            {
                test: /\.json$/,
                loader: 'json',
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
