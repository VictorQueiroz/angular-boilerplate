var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Server is running at 0.0.0.0:3000');
});
