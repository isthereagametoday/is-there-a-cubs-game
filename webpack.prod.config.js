var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    bundle: './',
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src', 'styles'],
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loaders: ['url-loader?limit=100000'],
      },
      {
        test: /\.(png|svg)(\?[a-z0-9=\.]+)?$/,
        loaders: ['file?name=[name].[ext]'],
      },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true,
    }),
  ],
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
