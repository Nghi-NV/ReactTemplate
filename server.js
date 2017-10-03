var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './public/views');

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening port 3000')
});

app.get('/', (req, res) => {
  res.render('index')
});
