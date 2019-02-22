const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: './src/app/index.js',
    output:{
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
module.exports = config