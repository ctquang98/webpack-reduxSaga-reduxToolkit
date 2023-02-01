const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') || {};
const TerserPlugin = require("terser-webpack-plugin");

// const webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals'); // modules that should not be bundled.

const VENDOR_LIBS = [
    "@material-ui/core",
    // "@material-ui/icons", => too large
    "axios",
    "react",
    "react-dom",
    "react-redux",
    "react-router-dom",
    "redux",
    "redux-devtools-extension",
    "redux-thunk"
]

module.exports = {
    mode: 'development', // production
    entry: {
        bundle: "./src/index.js", // => entry chunk
        // vendor: VENDOR_LIBS,
        test_split: "./TestSplitChunk"
    },
    output: {
        filename: "[name].[fullhash].js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
        new BundleAnalyzerPlugin()
        // use SourceMapDevToolPlugin for more configuration, set devtool: false
        // new webpack.SourceMapDevToolPlugin({}),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'source-map-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|mp3|ico)$/i,
                use: {
                    loader: 'file-loader'
                },
            }
        ]
    },
    optimization: {
        // create new chunk contains un-change code (libraries) and share to another ENTRY chunks
        // if you are using only ONE entry, no need to split chunk
        splitChunks: {
            // include all types of chunks (async, non-async chunk)
            // chunks: 'all', 

            // use cacheGroups instead, for naming and define library|folder,...
            cacheGroups: {
                // Create a vendors chunk, which includes all code from node_modules in the whole application,
                // shared between entry points
                commons: { // => cache group
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common_vendors',
                    chunks: 'all',
                    // If the current chunk contains modules already split out from the main bundle,
                    // it will be reused instead of a new one being generated
                    reuseExistingChunk: true,
                },
                // splitChunk: { // => didn't work
                //     test: /[\\/]TestSplitChunk[\\/]/,
                //     name: 'common_test_split_chunk',
                //     chunks: 'all',
                // }
            }
        },
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    devServer: {
        port: 3003
    },
    // externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
    // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
}

/*
    The SplitChunksPlugin allows us to extract common dependencies into an existing entry chunk or an entirely new chunk
    New chunk can be shared OR modules are from the node_modules folder
*/