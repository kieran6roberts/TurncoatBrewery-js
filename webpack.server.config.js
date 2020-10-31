const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = (env, argv) => {
  const SERVER_PATH = (argv.mode === "production") ?
  "./src/routes/app-prod.js" :
  "./src/routes/app-dev.js"

  return ({
    entry: {
      server: SERVER_PATH
    },
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js',
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          // Transpiles ES6-8 into ES5
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  })
};