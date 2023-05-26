const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
/* const Dotenv = require("dotenv-webpack"); */
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
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
    /*     new Dotenv(), */
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        REACT_APP_PUBLIC_KEY: process.env.REACT_APP_PUBLIC_KEY,
        REACT_APP_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
      }),
    }),
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
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".css"],
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
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
};
