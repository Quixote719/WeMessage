// const webpack = require('webpack')
// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin') //installed via npm

module.exports = {
    entry: [__dirname + '/src/index.js'],
    output: {
        // filename: 'bundle.js',
        // path: path.resolve(__dirname, 'build')

        path: __dirname + '/build/www/src',
        filename: 'bundle.js',
        publicPath: '/src'
    },
    devServer: {
        contentBase: './',
        compress: true,
        port: 9000,
        hot: true,
        open: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]',
                    'less-loader'
                ]
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
    // plugins: [new HtmlWebpackPlugin({ template: './index.html' })]
}
