//Middleware

const express = require("express");
const app = express();

//importing a middleware
const logger = require("./middleware-example");
//use the middleware on all routes!
//must be on top of file in order to apply to all routes
app.use(logger);

//this will apply only on routes after the '/api'
app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => console.log(`App listening on port 5000!`));
