var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');

var app = express();
var compiler = webpack(config);
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// app.use(require('webpack-hot-middleware')(compiler));
app.set('view engine', 'ejs');
app.set('views', './public/views');

app.listen(PORT, () => {
  console.log('Server is listening port 3000')
});

app.get('*', (req, res) => {
  res.render('index')
});
