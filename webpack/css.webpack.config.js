const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')

let app = './assets'
let dist = '../dist'

module.exports = {
  entry: {
    styles: app+'/stylesheets/styles.scss'
  },
  output: {
    filename: 'stylesheets/[name].css',
    path: __dirname + '/' + dist
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                includePaths: [path.resolve(__dirname, 'node_modules')],
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false
              },
            },
          ]
        })
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false,
              },
            },
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    require('autoprefixer'),
    new ExtractTextPlugin('stylesheets/[name].css')
  ],
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
}
