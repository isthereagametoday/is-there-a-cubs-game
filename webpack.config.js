import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = (stage) => {

  function output () {
    switch (stage) {
      case 'develop':
        return {
          path: path.join(__dirname, 'dist'),
          filename: 'bundle.js',
          publicPath: 'http://0.0.0.0/3000/',
        }
      case 'production':
        return {
          filename: 'bundle.js',
          path: path.join(__dirname, 'public'),
        }
      default:
        throw new Error('The state requested ' + stage + " doesn't exist.")
    }
  },

  function entry () {
    switch (stage) {
      case 'develop':
        return [
          require.resolve('webpack-dev-server/client?http://0.0.0.0:3000/'),
          require.resolve('webpack/hot/only-dev-server'),
          './client',
        ]
      case 'production':
        return [
          './client',
        ]
      default:
        throw new Error('The state requested ' + stage + " doesn't exist.")
    }
  },
  function plugins () {
    switch (stage) {
      case 'develop':
        return [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.DefinePlugin({
              'process.env': Object.keys(process.env).reduce(function(o, k) {
                o[k] = JSON.stringify(process.env[k]);
                return o;
              }, {})
            })
          ],
      }
      case 'production':
        return [
        new ExtractTextPlugin('./style.css', {
          allChunks: true
        }),
        new webpack.DefinePlugin({
          'process.env': Object.keys(process.env).reduce(function(o, k) {
          o[k] = JSON.stringify(process.env[k]);
            return o;
          }, {})
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
              warnings: false
            }
          }),
        ]
      default:
        throw new Error('The state requested ' + stage + " doesn't exist.")
    }
  

  function resolve () {
    return {
      extensions: ['', '.js', '.jsx', '.json', '.scss'],
      modulesDirectories: [
        directory,
        'styles',
        'components',
        'node_modules',
      ],
    }
  }

  function devtool () {
    switch (stage) {
      case 'develop':
      case 'production':
        return 'inline-source-map'
      default:
    }
  }
  
  function module (config) {
    // common config for every env
    config.loader('js', {
      test: /\.jsx?$/,
      loaders: ['babel'],
    })
    config.loader('html', {
      test: /\.html$/,
      loader: 'raw',
    })
    config.loader('json', {
      test: /\.json$/,
      loaders: ['json'],
    })
    // Match everything except config.toml
    config.loader('png', {
      test: /\.png$/,
      loader: 'null',
    })
    config.loader('svg', {
      test: /\.svg$/,
      loader: 'null',
    })
    config.loader('ico', {
      test: /\.ico$/,
      loader: 'null',
    })
    config.loader('fonts', {
      test: /\.(woff|woff2|eot|ttf)(\?[a-z0-9=\.]+)?$/,
      loader: 'url-loader?limit=100000',
    })
  }

    switch (stage) {
      case 'develop':
        config.loader('scss', {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
        })
        config.loader('js', {}, (cfg) => {
          cfg.loaders.unshift('react-hot')
          return cfg
        })
        return config

      case 'production':
        config.loader('scss', {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css!sass')
        })

        return config

      default:
    }
  }

  const config = new Config()

  config.merge({
    context: directory + '/pages',
    node: {
      __filename: true,
    },
    entry: entry(),
    debug: true,
    devtool: devtool(),
    output: output(),
    resolveLoader: {
      modulesDirectories: [
        'node_modules',
        'components',
        'styles',
      ],
    },
    plugins: plugins(),
    resolve: resolve(),
  })

    return module(config)
  }
};
