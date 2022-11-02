const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const target = process.env.NODE_ENV === 'production' ? 'browserslist' : 'web';

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
];

if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
    mode,
    target,
    context: path.resolve(__dirname, 'src/'),
    entry: {
        main: ['./index.js'],
        test: {import: './assets/test.sass', filename: "test.css"},
        only: ['./assets/only.sass']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
        new HtmlWebpackPlugin({
            filename: './lk/example.html',
            template: 'lk/text.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new FaviconsWebpackPlugin('./assets/apple-touch-icon.png'),
        new BundleAnalyzerPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            App: path.resolve(__dirname, 'src/')
        }
    },

    devtool: 'source-map',

    devServer: {
        hot: true,
    },

    module: {
        rules: [
            {test: /\.(html)$/, use: ['html-loader']},
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: mode === 'production' ? 'asset' : 'asset/resource',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.svg$/i, // exclude react component if *.svg?url
                use: ['@svgr/webpack'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    }
}