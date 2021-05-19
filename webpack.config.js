const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
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
    mode: 'development',
    entry: {
        bundle: "./src/index.js",
        vendor: VENDOR_LIBS
    },
    output: {
        filename: "[name].[fullhash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|mp3|ico)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all',
        },
    },
    devServer: {
        port: 3003
    },
    // externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
    // externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
}