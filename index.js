const express = require('express');
const server = express();

const PORT = process.env.PORT || 5001;


server.use(express.static(__dirname + '/public'));

server.set('view engine', 'pug');

server.get('/', (_ , res) => {
  res.render('pages/home');
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));