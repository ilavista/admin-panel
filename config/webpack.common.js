const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


const paths = require('./paths')
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {


    // Where webpack outputs the assets and bundles
    output: {
        path: paths.build,
        filename: 'main.js',
        publicPath: '/',
    },

    // Customize the webpack build process
    plugins: [
        new VueLoaderPlugin(),

        // Removes/cleans build folders and unused assets when rebuilding
        new CleanWebpackPlugin(),

        // Copies files from target to destination folder
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
    ],

    // Determine how modules within the project are treated
    module: {
        rules: [
            // JavaScript: Use Babel to transpile JavaScript files
            { test: /\.js$/, use: ['babel-loader'] },

            { test: /\.vue$/, use: 'vue-loader' },

            // Images: Copy image files to build folder
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

            // Fonts and SVGs: Inline files
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