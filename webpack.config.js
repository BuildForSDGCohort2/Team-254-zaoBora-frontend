const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = env => {
    const isProduction = env === 'production';

    return {
        mode: 'development',
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'public/dist'),
            publicPath: '/',
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
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
            }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, 'public/index.html'),
                favicon: 'public/tree.png',
                filename: 'index.html'
            }),
            new Dotenv()
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, '/public'),
            historyApiFallback: true,
            compress: true,
        }
    }
};
