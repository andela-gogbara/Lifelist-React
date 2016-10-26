var HTMLWEBPACKCONFIG = require('html-webpack-plugin');
var HTMLWEBPACKCONFIGPLUGIN = new HTMLWEBPACKCONFIG({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: [
    "./app/index.js"
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + "/dist"
  },
  plugins: [HTMLWEBPACKCONFIGPLUGIN]
}
