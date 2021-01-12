const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const Components = require('../components.json');

let entrys = {
  index:  path.join(__dirname, '../packages/index.js')
}
const ComponentsPath = Object.keys(Components).forEach(key => entrys[key] = Components[key])

console.info('ComponentsPath--->', ComponentsPath)

module.exports = merge({
  mode: 'production',
  entry: entrys,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../lib'),
    library: 'VUI',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
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
      // // 抽离less
      {
        test: /\.less$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      }
    ],
  },
  optimization: {
    //压缩 css
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
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "/theme/[name].css",
    })
  ],
})