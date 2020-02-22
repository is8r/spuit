const path = require('path')
const webpack = require('webpack')

let js = require('./webpack/js.webpack.config')
let css = require('./webpack/css.webpack.config')

module.exports = [
  js,
  css
]