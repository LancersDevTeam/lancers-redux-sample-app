const path = require('path');
const webpack = require('webpack');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

require('dotenv').config();

const config = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve('www/js/'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [{
                    loader: 'eslint-loader',
                    options: {
                        configFile: './.eslintrc.yaml',
                        fix: true,
                    },
                }],
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                })
            },
        ],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new FlowStatusWebpackPlugin({
            binaryPath: './node_modules/.bin/flow',
            failOnError: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),
    ],
};

module.exports = config;
