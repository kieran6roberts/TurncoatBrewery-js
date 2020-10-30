const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    home: './public/js/app.js',
    shop: './public/js/appShop.js',
  },
  output: {
    path: path.join(__dirname, 'distTest'),
    publicPath: '/',
    filename: '[name].js',
  },
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        use: [{loader: "html-loader"}]
      },
      {
        test: /\.(jpg|png)$/i,
        use: [{loader: "url-loader"}]
      },
      {
        test: /\.ejs$/,
        loader: "raw-loader",
      },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ]
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: ['file-loader']
      }
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
    new CleanWebpackPlugin()
  ],
};