const express = require("express");
const app = express();

const logger = require("./middleware-example");
const authorize = require("./middleware-authorize");

app.use(logger);

//use multiple middleware. Order matters
//all reoutes will use them
//app.use expect a middleware !!!
app.use([logger, authorize]);

//express builtin middleware example
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send("Home");
});

//add single middleware to a route
app.get("/about", logger, (req, res) => {
  res.send("About");
});

//add multiple middleware to a route
app.get("/api/products", [logger, authorize], (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user); //    {name: 'john', id: 3}
  res.send("Items");
});

app.listen(5000, () => console.log(`App listening on port 5000!`));
