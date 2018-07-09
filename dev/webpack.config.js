const path = require("path")
const webpack = require('webpack')
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const DashboardPlugin = require("webpack-dashboard/plugin")

module.exports = (env = {}) => ({
    devtool: "source-map",
    entry: "./packages/main/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
//        libraryTarget: "umd",
//        library: "app"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 1600,
        stats: "errors-only",
        open: true
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                include: path.resolve(__dirname ),
                exclude: /node_modules/,
                query: {
                    presets: [
                        [ 'es2015', { modules: false } ],
                        'react'
                    ],
                    plugins: [ ]
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    },
    plugins: [
//        new webpack.DefinePlugin({
//            "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV || "development")
//        }),
//        new DashboardPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', ".css"],
    }
})