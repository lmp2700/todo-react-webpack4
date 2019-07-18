const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: { minimize: true }
                        }
                    ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: '/src/index.html',
            filename: '/src/index.html' // output
        }),
        new MiniCssExtractPlugin({
            filename: '[name]'.css,
            chunkFilename: '[id].css'
        }),
    ],
    devtool: 'cheap-module-source-map',
    // devServer: {
    //     proxy: {
    //     '/api/todos': {
    //         target: 'http://localhost:8082',
    //         secure: false,
    //         changeOrigin: true,
    //     }
    // },
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Headers': 'Content-Type',
    //         'Access-Control-Allow-Methods': 'GET, OPTIONS, PUT, POST, DELETE',
    //     },
    // },
}