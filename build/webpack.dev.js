const { merge } = require('webpack-merge')
const webpackCommonConf = require('./webpack.common')
const webpack = require('webpack')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const config = require('./config')

module.exports = merge(webpackCommonConf, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ['vue-style-loader','style-loader', 'css-loader', 'postcss-loader'] // 加了 postcss
      },
      {
        test: /\.less$/,
        loader: ['vue-style-loader','style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development')
    }),
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 8080,
    host: 'localhost',
    progress: true,
    hot: true,
    open: false,
    overlay: {
      errors: true
    },
    historyApiFallback: true,
    publicPath: config.publicPath,
    clientLogLevel: 'none',
    compress: true,
    quiet: true,
  }
})