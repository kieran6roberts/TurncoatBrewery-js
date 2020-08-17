const express = require("express");
const path = require("path");
require('dotenv').config();

const app = express();

//ejs view engine
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

//public folder
app.use(express.static("./public"));

//pages
app.get("/", (req, res) => {
  res.render("pages/home");
});
app.get("/our-story", (req, res) => {
  res.render("pages/our-story");
});
app.get("/beers", (req, res) => {
  res.render("pages/beers");
});
app.get("/contact", (req, res) => {
  res.render("pages/contact");
});
app.get("/shop", (req, res) => {
  res.render("pages/shop");
});

app.listen(process.env.PORT || 5000, console.log(`Up and running on port ${process.env.PORT}`))