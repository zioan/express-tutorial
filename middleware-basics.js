//Middleware

//functions that execute during the request
//have access to req and res object
//are everywhere in express
//req => middleware => res

const express = require("express");
const app = express();

//Middleware example
//at the end it MUST be terminated or next() ...
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time); //  GET / 2021
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => console.log(`App listening on port 5000!`));
