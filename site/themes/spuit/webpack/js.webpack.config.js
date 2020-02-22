const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let app = './assets';
let dist = '../static';

module.exports = {
  entry: {
    scripts: app+'/javascripts/scripts.js'
  },
  output: {
    filename: 'javascripts/[name].js',
    path: __dirname + '/' + dist
  },
  // plugins: [
  //   new UglifyJsPlugin()
  // ],
  cache: true
};
