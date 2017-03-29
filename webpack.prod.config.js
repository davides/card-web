const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const config = require('./webpack.config');

config.plugins = [
  new UglifyJsPlugin(),
  new CopyWebpackPlugin([
    { from: './src/index.html', to: 'index.html' },
    { from: './src/main.css', to: 'main.css' }
  ])
];

module.exports = config;
