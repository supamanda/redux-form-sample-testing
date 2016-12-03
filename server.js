// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');

// new WebpackDevServer(webpack(config), {
//   hot: true,
//   historyApiFallback: true,
//   contentBase: "src"
// }).listen(8998, 'localhost', function (err, result) {
//   if (err) {
//     return console.log(err);
//   }

//   console.log('Listening at http://localhost:8998/');
// });

var path = require('path');
var webpack = require('webpack');
var express = require('express');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  contentBase: "src"
}));

app.use(hotMiddleware(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(8998, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:8998/');
});