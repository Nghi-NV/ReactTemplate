
module.exports = {
  entry: './src/App.js',
  output: {
    filename: './public/bundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'postcss-loader' ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader?sourceMap&modules&localIdentName=[name]__[local]__[hash:base64:5]' },
          { loader: 'sass-loader' },
          { loader: 'postcss-loader' }
        ]
      }
    ]
  }
}
