const express = require("express");
const app = express();
let { people } = require("./data");

//static assests
//import files from ./methods-public (html, css, javascript...etc)
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));

//GET
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//POST
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.send(`Welcome ${name}`);
  }
  res.send("please provide credentials :P");
});

app.listen(5000, () => console.log(`App listening on port 5000!`));
