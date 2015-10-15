module.exports = {
  context: __dirname + "/src",
  entry: "./index",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  }
}
