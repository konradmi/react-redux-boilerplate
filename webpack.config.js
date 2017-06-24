var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
                     'react', 'redux', 'react-redux', 'react-dom',
                    ]

module.exports = {
  entry: {
    // Project bundle
    bundle: './src/index.js',
    // Extract vendor libs to a seperate bundle
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // add a hash to the name so that it's managed correctly by a browser's cache
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    // Remove vendor libs from the project's bundle. They will be imported in a seperate bundle
    new webpack.optimize.CommonsChunkPlugin({
    	names: ['vendor', 'react', 'redux', 'react_redux', 'react_dom', 'manifest']
    }),
    // Include the created bundles automatically in index.html
    new HtmlWebpackPlugin({
    	template: 'src/index.html'
    }),
    // Define env vars
    new webpack.DefinePlugin({
    	'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
