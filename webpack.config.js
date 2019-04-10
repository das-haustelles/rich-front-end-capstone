const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '/client'),
  optimization: {
    
  },
  module: {
    rules: [{
      test: [/\.(js|jsx)$/],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
    }],
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'styled-components': path.resolve('/', 'node_modules', 'styled-components'),
    },
  },
};
