var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000/',
    'webpack/hot/only-dev-server',
    './src/main.js',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: 'http://0.0.0.0:3000/',
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
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.scss?$/,
        loader: 'style!css!sass',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.(json|woff|woff2|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    proxy: {
      '*': 'http://0.0.0.0:3000',
    },
    host: '0.0.0.0',
  },
  node: {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
