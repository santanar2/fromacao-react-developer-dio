const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { Resolver } = require('webpack');

module.exports = {
    devtool: "source-map",
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.html$/,
                use: [{ loader: "html-loader"}]
            },

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: ["file-loader"]
            },

        ]
    },
    Resolver: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        })
    ]

    
}
