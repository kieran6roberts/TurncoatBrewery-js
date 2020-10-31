const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    home: "./public/js/app.js",
    shop: "./public/js/appShop.js",
    beers: "./public/js/appBeers.js",
    contact: "./public/js/appContact.js",
    error: "./public/js/app404.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "public/js/[name].[contenthash].js",
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
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "public/fonts/"
            }

          }
        ],
      },
      {
       test: /\.(png|jpg)$/,
       use: [
         {
           loader: "file-loader",
           options: {
            name: "[name].[ext]",
            outputPath: "public/images/"
          }
         }
        ]
      },
      {
        test: /\.css$/,
        use: [ 
          MiniCssExtractPlugin.loader, 
          {
            loader: "css-loader",
          },/*
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.join(__dirname, "postcss.config.js")
              }
            }
          }*/
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./views/pages/index.ejs",
      filename: "./views/pages/index.ejs",
      chunks: ["home"],
      scriptLoading: "defer"
    }),
    new HtmlWebPackPlugin({
      template: "./views/pages/beers.ejs",
      filename: "./views/pages/beers.ejs",
      chunks: ["beers"],
      scriptLoading: "defer"
    }),
    new HtmlWebPackPlugin({
      template: "./views/pages/contact.ejs",
      filename: "./views/pages/contact.ejs",
      chunks: ["contact"],
      scriptLoading: "defer"
    }),
    new HtmlWebPackPlugin({
      template: "./views/pages/shop.ejs",
      filename: "./views/pages/shop.ejs",
      chunks: ["shop"],
      scriptLoading: "defer"
    }),
    new HtmlWebPackPlugin({
      template: "./views/pages/404.ejs",
      filename: "./views/pages/404.ejs",
      chunks: ["error"],
      scriptLoading: "defer"
    }),
    new MiniCssExtractPlugin({
      filename: "public/styles/[name].css",
      chunkFilename: "[id].[contenthash].css",
    }),
    new CopyPlugin({
      patterns: [
        {from:'public/images',to:'public/images'},
        {from:'views/template',to:'views/template'},
      ]
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: [
          'default', 
          { discardComments: 
            { removeAll: true } 
          }
        ],
      },
      canPrint: true
    }),
    new CleanWebpackPlugin()
  ],
};