const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  watch: true,
  entry: require.resolve("./src/main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        exclude: /(node_modules|\.module.(s(a|c)ss)$)/,
        loader: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"]
  },
  plugins: [
    new MinifyPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].css"
    })
  ],
  devServer: {
    inline: false,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};
