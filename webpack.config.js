const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'src/demo/index.html',
  inject: 'body',
  chunks: ['demo']
});

module.exports = {
  entry: {
    client: './src/index.tsx',
    demo: './src/demo/index.tsx',
    webtest: 'mocha-loader!./test/index.tsx'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, exclude: 'node_modules', loader: 'ts-loader' },
      { test: /\.css?$/, loader: 'style-loader!css-loader' },
      { test: /\.html?$/, loader: 'html-loader' },
    ]
  },
  devtool: 'source-map',
  plugins: [
    htmlWebpackPluginConfig
  ]
};