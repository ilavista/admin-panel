const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


const paths = require('./paths')
const {VueLoaderPlugin} = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    output: {
        path: paths.build,
        filename: 'main.js',
        publicPath: '/',
    },

    plugins: [
        new VueLoaderPlugin(),

        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.public,
                    to: 'assets',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                    noErrorOnMissing: true,
                },
            ],
        }),

        new MiniCssExtractPlugin({
            filename: 'styles/[name].css',
            chunkFilename: '[id].css',
        }),
    ],

    module: {
        rules: [
            { test: /\.js$/, use: ['babel-loader'] },

            { test: /\.vue$/, use: 'vue-loader' },

            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

            { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
        ],
    },

    resolve: {
        modules: [paths.src, 'node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': paths.src,
            vue: 'vue/dist/vue.js'
        },
    },
}