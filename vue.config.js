const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  configureWebpack: {
    optimization: {
      minimize: true,
    },
    plugins: [
      new BundleAnalyzerPlugin(),
      new webpack.DefinePlugin({
        //<--key to reduce React's size
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new DuplicatePackageCheckerPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new CompressionPlugin(),
    ],
  },
};
