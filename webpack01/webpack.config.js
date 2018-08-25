var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require("path");

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: {
        index: "./src/js/index.js",
        test: "./src/css/test.scss",
        // index: "./src/css/index.css"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname + "/dist/js")
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
            filename: "../css/[name].bundle.css",
            chunkFileName: '[id].css'
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3300,
    }
}
