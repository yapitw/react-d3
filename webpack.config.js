const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react'],
            plugins: [
              'transform-class-properties',
              'transform-object-rest-spread'
            ]
          }
        }
      },
      {
        test: /\.s?(c|a)ss$/,
        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ])
      }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: 'sourcemaps/[file].map',
      fileContext: 'dist'
    }),
    new ExtractTextPlugin('style.css')
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist/',
    compress: true,
    port: 8080
  }
}