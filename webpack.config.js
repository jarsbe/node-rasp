const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};