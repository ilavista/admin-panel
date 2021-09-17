const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {merge} = require('webpack-merge')

const common = require('./webpack.common.js')
const paths = require('./paths')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    entry: [paths.src + '/js/test.js'],

    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        historyApiFallback: true,
        contentBase: paths.build,
        open: true,
        compress: true,
        hot: true,
        port: 8085,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'ilavista admin-panel',
            template: paths.src + '/template.html', // template file
            filename: 'index.html', // output file
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true, importLoaders: 1, modules: false},
                    },
                    {loader: 'sass-loader', options: {sourceMap: true}},
                ],
            },
        ],
    },
})