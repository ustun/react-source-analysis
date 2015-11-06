module.exports = {
  entry: './hello_react.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
  },
  devtool: "#source-map",
  output: {
    path: __dirname  + '/build',
    filename: '[name].js',
    publicPath: 'http://localhost:8090/assets'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }

};
