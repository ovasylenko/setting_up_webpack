const {resolve} = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = {
  entry: './client/main.js',
  mode: 'development',
  output: {
    filename: 'js/[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    port: 8080,
    host: 'localhost',
    index: 'index.html',
    overlay: {
      warning: false,
      errors: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${__dirname}/client/index.html`,
          to: 'index.html'
        }
      ]
    })
  ]
}

module.exports = config