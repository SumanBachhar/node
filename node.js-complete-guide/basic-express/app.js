const port = 5100;

const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("In anther middleware");
  res.send("<h1>This is the add prpoduct page</h1>");
});
app.use("/", (req, res, next) => {
  console.log("In anther middleware");
  res.send("<h1>Hello from express</h1>");
});

app.listen(port);
