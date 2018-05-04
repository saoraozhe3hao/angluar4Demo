'use strict';

let path = require('path'),
    fs = require('fs'),
    webpack = require('webpack'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin");

// 获取命令参数，命令写在package.json中
let args = process.argv;
// 确定目录
let dist = path.resolve(__dirname, './', 'dist/');
let src = path.resolve(__dirname);

// webpack 配置
module.exports = {
    // 入口文件
    entry: {
        main: './src/main.ts'
    },
    // 输出
    output: {
        // 输出目录
        path: dist,
        //publicPath: '', 文件引用前缀
        // 输出文件名，[name]与入口文件同名
        filename: '[name]-[chunkhash].js'
    },
    // require 文件时可省略后缀 .js 和 .ts
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        // 加载器配置
      rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },{
                test: /\.html$/,
                loader: 'html-loader'
            },{
                // 目标文件
                test: /\.css$/,
                use: [
                     // 使用这个插件，使得所有less 能被打入一个文件，而不是一个个style
                    MiniCssExtractPlugin.loader,
                    'css-loader' // 先用css-loader处理css,再用style-loader将css写入<style>标签
                ]
            }, {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader','less-loader'
                ]
            }, {
               test: /\.(js)$/,
                // 排除目标
                exclude: /(node_modules)/,
                // 用babel-loader 编译 jsx，问号后面为参数。
                //es2015插件包含了babel-plugin-transform-es2015-modules-commonjs，会把ES6模块转成CommonJS模块
                loader: 'babel-loader?presets[]=es2015'
            }, {
                test: /\.(png|jpg|jpeg|gif|webp|svg)$/,
                // 小于 8k的图片，输出为base64 dataurl
                loader: 'url-loader?name=assets/images/[name].[hash:8].[ext]&limit=8192'
            }, {
                test: /\.(ttf|otf|woff|eot)$/,
                // 字体转 dataurl
                loader: 'url-loader?name=assets/fonts/[name].[hash:8].[ext]&limit=1024'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    // 额外插件
    plugins: [
        // CSS提取 插件
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css"
        }),
        // index.html生成 插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            //指定文件名
            filename: 'index.html'
            //inject: 'body' // js标签插入位置
        })
    ],
    // 配置 webpack-dev-server
    devServer:{
        historyApiFallback: true, // 允许路由
        inline: true,
        port: 8080
  }
};
