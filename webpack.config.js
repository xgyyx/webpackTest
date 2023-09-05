const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (dirName) => {
  // build dir
  const currDirName = dirName || 'dynamicImport'

  return {
    mode: "development",
    devtool: false,
    entry: `./src/${currDirName}/index.js`,
    output: { 
      path: path.resolve(__dirname, "dist", currDirName),
      filename: "main.js"
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./public/index.html", filename: "index.html"})
    ],
    devServer: {
      port: 3720
    }
  }
}