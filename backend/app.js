const express = require('express');
const debug = require('debug')('node-angular');
const app = express();

app.use((req, res, next) => {
  console.log("First Middleware");
});

module.exports = app;
