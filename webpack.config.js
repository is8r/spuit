var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var app = './assets';
var dist = './dist';
module.exports = [{
  entry: {
    scripts: app+'/javascripts/scripts.js'
  },
  output: {
    filename: 'javascripts/[name].js',
    path: __dirname + '/' + dist
  },
  devServer: {
    contentBase: dist,
    port: 8080
  }
}, {
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
         test: /\.(scss|css)$/,
         loaders: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: ['css-loader', 'sass-loader', 'postcss-loader']
          })
       }
     ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      }
    }),
    new ExtractTextPlugin({ filename: 'stylesheets/[name].css', disable: false, allChunks: true })
  ]
}];
