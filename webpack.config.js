const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development", // 模式写成development，方便查看打包结果
  devtool: false,
  entry: "./src/index.js",
  output: { 
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html", filename: "index.html"})
  ],
  devServer: {
    port: 3720
  }
}