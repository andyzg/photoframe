module.exports = {
   entry: './src/index.jsx',
   output: {
       path: __dirname + '/js',
       filename: 'app.bundle.js'
   },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
