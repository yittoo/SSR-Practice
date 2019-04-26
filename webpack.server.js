const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // inform webpack that we're bundling for nodejs rather than browser
  target: "node",
  // tell webpack the root file of our server app
  entry: "./src/index.js",
  // tell webpack where to output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
