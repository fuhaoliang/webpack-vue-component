const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./config')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '../src/main.js'),
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'less': [
              'vue-style-loader',
              'style-loader',
              'css-loader',
              'less-loader'
            ]
          }
        },
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 5 * 1024,
              name: '[name].[contentHash:8].[ext]',
              outputPath:'img',//决定打包出来的文件的路径 在 dist 下的路径
              publicPath: path.join(config.publicPath, 'img') ,//决定引用的文件的路径 publicPath+name = css中引用的url的路径
            },
          }
        ]
      }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      url: config.publicPath,
      title: 'My App',
      template: path.join(__dirname, "../public/index.html"),
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, "../src"),
    }
  }
}