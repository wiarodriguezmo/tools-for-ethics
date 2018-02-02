
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'js')
  },
  plugins: [
    new UglifyJsPlugin({
        test: /\.js($|\?)/i
      })
  ]
};