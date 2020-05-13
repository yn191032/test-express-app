const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/test', (req, res) => {
  res.send('Test route!');
});

app.listen(8080, () => console.log('Server is up...'))