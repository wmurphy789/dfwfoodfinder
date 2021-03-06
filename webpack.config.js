const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react'],
            plugins: ['emotion']
          }
        },
      },
      {
        test: /\.css$/,
        use: [
          {
          loader: 'style-loader'
          },
          {
            loader: 'css-loader'    
          }
        ]
      },
      {test: /\.png$/, use: 'url-loader?mimetype=image/png'}
    ]
  },
  devtool: 'inline-source-map'
};
