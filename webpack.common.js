// @ts-check
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.[fullhash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: [".*", ".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/constants": path.resolve(__dirname, "src/constants"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/routes": path.resolve(__dirname, "src/routes"),
      "@/store": path.resolve(__dirname, "src/store"),
      "@/utils": path.resolve(__dirname, "src/utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg)$/i,
        type: "asset/resource",
      },
    ],
  },
};
