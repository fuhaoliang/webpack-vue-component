const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

module.exports = {
  components: path.resolve('packages/components/**/[A-Z]*.vue'),
  usageMode: 'expand',
  exampleMode: 'expand',
  webpackConfig: {
    module: {
      rules: [
        // Vue loader
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader'
        },
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
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
      // add vue-loader plugin
      new VueLoaderPlugin(),
      new HotModuleReplacementPlugin()
    ]
  }
}