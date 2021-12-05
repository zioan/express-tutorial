const express = require("express");
const path = require("path");
const app = express();

//express take care of the files path ("./public")
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
//adding to static assets
//SSR (server side rendering)
// });

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("Server is listenting on post 5000...");
});
