const express = require('express');
const server = express();

const PORT = process.env.PORT || 5001;


server.use(express.static(__dirname + '/public'));

server.set('view engine', 'pug');

server.get('/', (req , res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log('Visitor IP: ', ip)
  res.render('pages/home');
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));