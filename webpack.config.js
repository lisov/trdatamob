var webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      loaders: ['style', 'css', 'sass']
    },
    {
      test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
      exclude: /node_modules/,
      loader: 'file?name=[path][name].[ext]'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },

  // noParse: /react\/react.js/,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react/react.js',
      underscore: "underscore"
    })
  ]
};

