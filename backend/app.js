const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('first middleware');
  next();
});

app.use((req, res, next) => {
  res.send('Hello From express');
  next();
});

app.use((req, res, next) => {
  console.log('Wassim');
});
// app.use((req, res, next) => {
//   res.send("wassim!");
// });

module.exports = app;
