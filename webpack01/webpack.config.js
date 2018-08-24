var MiniCssExtractPlugin  = require("mini-css-extract-plugin");
var path = require("path");

module.exports = {
    devtool: "source-map",
    entry: {
        index: "./entry/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname + "/dist")
    },
    module: {
        rules :[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                // loader: ExtractTextPlugin.extract('style-loader', 'css-loader','less-loader')
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/index.css"
        })
    ]
}
