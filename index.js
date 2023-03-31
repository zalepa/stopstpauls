const express = require('express');
const server = express();


server.use(express.static(__dirname + '/public'));

server.set('view engine', 'pug');

server.get('/', (_ , res) => {
  res.render('pages/home');
});

server.listen(3000);