const HtmlWebpackPlugin = require('html-webpack-plugin');
const MincssExtract = require('mini-css-extract-plugin');
module.exports = {
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                exclude:/node_modules/,
                use:{
                    loader:"file-loader"
                }
            },
            {
                test:/\.scss$/,
                exclude:/node_modules/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options:{minimize:false}
                    }
                ]
            }
        ]
    },plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'./index.html'
        }),
        new MincssExtract({
            filename:"[name].css",
            chunkFilename:"[id].css"
        })
    ]
}
