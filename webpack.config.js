module.exports = {
  entry: {
    tests: 'mocha-loader!./test/index.browser.ts'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' },
    ]
  },
  devtool: 'eval'
};