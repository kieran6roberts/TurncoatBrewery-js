const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const model = require("../models/product.js");
require("regenerator-runtime/runtime.js");
require("dotenv").config();

const Product = model;

const app = express();
  
mongoose.connect("mongodb://localhost:27017/shopping",  
{
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database connected"));

//ejs view engine
app.set("views", path.join(__dirname, "../../dist/views"));
app.set("view engine", "ejs");

//set public static folder
app.use(express.static("./dist"));

//pages

app.get("/", (req, res) => {
  res.render("pages/index", {
    pageTitle: "home"
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

app.get("/shop", async (req, res) => {
  try {
    await Product.find( (err, docs) => {
      res.render("pages/shop", {
        pageTitle: "shop",
        products: docs
      });
    });

  } catch (err) {
    res.status(500).render("pages/shop", {
      pageTitle: "shop",
      message: err
    });
  }
});

// error page
app.use( (req, res) => {
  res.status(404).render("pages/404", {
    pageTitle: "404: Page Not Found",
  });
});

app.listen(process.env.PORT || 5000, console.log(`Up and running on port ${process.env.PORT}`))