const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin({
      writeToFileEmit: true,
      seed: {},
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src", "index.html"),
      favicon: "./assets/images/favicon.ico",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: [".js", ".jsx", ".json", ".ts", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(css)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|svg|png|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};
