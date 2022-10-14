var express = require("express");
var fs = require("fs");
var app = express();
app.use(express.static("public"));
// app.set("view engine", html);
app.get("/", (req, res) => {
  html = fs.readFileSync("basePage.html");
  res.writeHead(200);
  res.write(html);
  res.end();
});
app.get("/about", (req, res) => {
  html = fs.readFileSync("aboutPage.html");
  res.writeHead(200);
  res.write(html);
  res.end();
});
app.get("/contact", (req, res) => {
  html = fs.readFileSync("contactPage.html");
  res.writeHead(200);
  res.write(html);
  res.end();
});
app.get("/home", (req, res) => {
  html = fs.readFileSync("basePage.html");
  res.writeHead(200);
  res.write(html);
  res.end();
});

app.listen(3000, () => {
  console.log("Server connected on port 3000");
});
