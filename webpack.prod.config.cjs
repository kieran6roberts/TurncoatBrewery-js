const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    home: "./public/js/app.js",
    shop: "./public/js/appShop.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",
  },
  target: "web",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.ejs$/,
        loader: "raw-loader",
      },
      {
       test: /\.(png|jpg)$/,
       use: ['url-loader']
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, "css-loader" ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "views/pages/index.ejs",
      filename: "./index.ejs",
      excludeChunks: [ 'server' ]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }),
    new CleanWebpackPlugin()
  ],
};