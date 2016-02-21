var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors,
      './src/app/index.jsx'],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'src/public'),
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : path.join(__dirname, 'src/app'),
        loaders : ['react-hot', 'babel']
      }
    ]
  },
  plugins: [
     new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;