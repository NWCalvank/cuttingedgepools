const { resolve } = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  context: resolve('src/js'),
  entry: './app.js',
  output: {
    path: resolve('build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  plugins: [new MinifyPlugin({}, {})],
  module: {
    loaders: [
      { test: /\.js$/, loaders: [], exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
    ],
  },
};
