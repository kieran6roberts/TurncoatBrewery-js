const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require('dotenv').config();

const Product = require("./models/product");

const app = express();

mongoose.connect("mongodb://localhost:27017/shopping",  
{
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

//ejs view engine
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

//public folder
app.use(express.static("./public"));

//pages
app.get("/", (req, res) => {
  res.render("pages/home", {
    pageTitle: "home"
  });
});

app.get("/our-story", (req, res) => {
  res.render("pages/our-story", {
    pageTitle: "story"
  });
});
app.get("/beers", (req, res) => {
  res.render("pages/beers", {
    pageTitle: "beers"
  });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact", {
    pageTitle: "contact"
  });
});

app.get("/shop", (req, res) => {
  Product.find( (err, docs) => {
    res.render("pages/shop", {
      pageTitle: "shop",
      products: docs
    });
  })
});

app.listen(process.env.PORT || 5000, console.log(`Up and running on port ${process.env.PORT}`))
