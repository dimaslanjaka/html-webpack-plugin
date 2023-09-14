const path = require('path')
const HtmlWebpackPlugin = require('./index.js');
const webpack = require('webpack')
const fs = require('fs');
const assert = require('assert');

const OUTPUT_DIR = path.resolve(__dirname, 'dist');

const webpackConfig = [{
  mode: 'production',
  entry: path.join(__dirname, 'spec/fixtures/index.js'),
  output: {
    path: path.join(OUTPUT_DIR, 'no-public-path'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'no-public-path.html'
  })]
},
{
  mode: 'production',
  entry: path.join(__dirname, 'spec/fixtures/index.js'),
  output: {
    path: path.join(OUTPUT_DIR, 'with-public-path'),
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'with-public-path.html',
    publicPath: 'www'
  }), new HtmlWebpackPlugin({
    filename: 'with-public-path2.html',
    publicPath: 'www'
  })]
}]

webpack(webpackConfig, (err, stats) => {
  console.log('webpack error?', err)
  if (!err) {
    process.stdout.write(stats.toString({
      // Add console colors
      colors: true,
    }) + '\n');
  }
});
