var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require("path");

module.exports = {
    devtool: "source-map",
    entry: {
        index: "./entry/index.js",
        test: "./entry/css/test.scss",
        index: "./entry/css/index.css"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname + "/dist")
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/[name].bundle.css",
            chunkFileName: '[id].css'
        }),
    ]
}
