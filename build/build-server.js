const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const webpackExamplesConf = require('./webpack.examples')

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = webpackExamplesConf.devServer.port
  portfinder.getPort((err, port) => {
    if (err) reject (err)
    else {
      webpackExamplesConf.devServer.port = port
      webpackExamplesConf.plugins.push(new FriendlyErrorsPlugin({
        // 清除控制台原有的信息
        clearConsole: true,
        // 打包成功之后在控制台给予开发者的提示
        compilationSuccessInfo: {
          messages: [`开发环境启动成功，项目运行在: http://${webpackExamplesConf.devServer.host}:${port}`]
        },
         // 打包发生错误的时候
         onErrors: () => { console.log("打包失败") }
      }))
      resolve(webpackExamplesConf)
    }
  })
})