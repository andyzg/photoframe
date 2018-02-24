const webpack = require('webpack');

module.exports = {
   entry: './src/index.jsx',
   output: {
       path: __dirname + '/js',
       filename: 'app.bundle.js'
   },
  module: {
    loaders: [
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, { test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
