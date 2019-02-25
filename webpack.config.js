const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: './src/app/index.js',
    output:{
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        
        // Se agrega para prevenir el error 'Cannot get / url'
        publicPath: '/'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                }
            },
            // Agregado para permitir la utilización de .scss
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
        ],
    },

    // Se agrega para prevenir el error 'Cannot get / url'
    devServer: {
        historyApiFallback: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
module.exports = config

