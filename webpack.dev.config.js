const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = require('./webpack.config');

config.devServer = {
  historyApiFallback: true,
  hot: true,
  inline: true,
  contentBase: './src',
  port: 8080
};

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new OpenBrowserPlugin({ url: 'http://localhost:8080' })
];

module.exports = config;
