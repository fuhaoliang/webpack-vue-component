const path = require('path')
const webpack = require('webpack')
const {merge} = require('webpack-merge')

const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HappyPack = require('happypack')

const webpackCommonConf = require('./webpack.common.js')
const config = require('./config')

module.exports = merge(webpackCommonConf, {
  mode: 'production',

  output: {
    filename: 'js/[name].[contentHash:8].js',
    path: path.join(__dirname, '../dist'),
    publicPath: config.publicPath
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // 抽离 css
      {
        test: /.\css$/,
        loader: [
          MiniCssExtractPlugin.loader, // 注意，这里不再用 style-loader
          'css-loader',
          'postcss-loader',
        ]
      },
      // 抽离less
      {
        test: /\.less$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('production')
    }),
    
    // 抽离 css 文件
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contentHash:8].css'
    }),

    // happyPack 开启多线程打包
    new HappyPack({
      // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
      id: 'babel',
      // 如何处理 .js 文件，用法和 Loader 配置中一样
      loaders: ['babel-loader?cacheDirectory']
    }),
    // 优化 js 文件
    // 清除无用信息
  ],

  optimization: {
    // 压缩 css
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
              drop_console: true,
              drop_debugger: false,
              // pure_funcs: ['console.log'] // 移除console
          },
          warnings: false
        },
        sourceMap: false,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
    // 分割代码块
    splitChunks: {
      chunks: 'all',
      /**
        * initial 入口chunk，对于异步导入的文件不处理
          async 异步chunk，只对异步导入的文件处理
          all 全部chunk
      */
     cacheGroups: {
        // 第三方模块
        vendor: {
        name: 'vendor', // chunk 名称
        priority: 1, // 权限更高，优先抽离
        test: /node_modules/,
        minSize: 0,  // 大小限制
        minChunks: 1  // 最少复用过几次
      },
      // 公共的模块
      common: {
        name: 'common', // chunk 名称
        priority: 0, // 优先级
        minSize: 0,  // 公共模块的大小限制
        minChunks: 2  // 公共模块最少复用过几次
      }
     }
    }
  }
})