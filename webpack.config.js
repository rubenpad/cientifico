const path = require('path')
const HWP = require('html-webpack-plugin')
const CopyWebpackPLugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HWP({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new CopyWebpackPLugin([
      {
        from: './src/styles/styles.css',
        to: ''
      }
    ])
  ]
}
