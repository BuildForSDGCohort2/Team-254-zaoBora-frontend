const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

console.log('==> ', path.resolve(process.cwd(), '.env'))

module.exports = env => {
    const isProduction = env === 'production';

    return {
        mode: env,
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'public/dist'),
            publicPath: '/',
        },
        module: {
            rules: [{
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'],
            }]
        },
        plugins: [
            new Dotenv({
                path: path.resolve(process.cwd(), '.env'),
            }),
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, 'public/index.html'),
                favicon: 'public/tree.png',
                filename: 'index.html'
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'CLOUD_NAME': 'zaobora',
                    'EVN': 'development'
                },
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, '/public'),
            historyApiFallback: true,
            compress: true,
        }
    }
};
