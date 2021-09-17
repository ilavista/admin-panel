const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { merge } = require('webpack-merge')

const paths = require('./paths')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    entry: [paths.src + '/js/index.js'],

    mode: 'production',

    devtool: false,

    output: {
        path: paths.build,
        publicPath: '/',
        filename: 'js/[name].js',
    },

    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                            modules: false,
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },

    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), '...'],
        runtimeChunk: {
            name: 'runtime',
        },
    },

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
})