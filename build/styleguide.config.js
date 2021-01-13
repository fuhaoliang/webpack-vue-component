const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

console.info('-->', path.join(__dirname, '../packages/components/**/src/[A-Z]*.vue'))

module.exports = {
  components: path.join(__dirname, '../packages/components/**/src/[A-Z]*.vue'),
  usageMode: 'expand',
  exampleMode: 'expand',
  styleguideDir: path.join(__dirname, '../docs'),
  // getComponentPathLine(componentPath) {

  //   const componentFileName = path.basename(componentPath, '.vue')
	// 	const name =
	// 		componentFileName.toLowerCase() === 'index'
	// 			? path.basename(path.dirname(componentPath))
  //       : componentFileName
  //     console.info('componentPath--->', name, componentPath)
        
	// 	return `import ${name} from '${componentPath.replace(/^packages\//, 'my-library/dist/')}'`
	// },
  webpackConfig: {
    output: {
    },
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