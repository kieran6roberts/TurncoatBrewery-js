const mongoose = require("mongoose");
const path = require("path");
const model = require("../models/product.js");
require("dotenv").config();

mongoose.connect(process.env.DATABASE__URL,  
{
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const Product = model;

const products = [
  new Product({
  id: "the best pilsner 6x330ml bottles",
  imagePath: "/images/beach.png",
  name: "the best pilsner",
  type: "pilsner",
  price: 19.99,
  description: "6x330ml bottles"
  }),
  new Product({
  id: "bitter IPA 6x330ml bottles",
  imagePath: "/images/mountains.png",
  name: "bitter IPA",
  type: "IPA",
  price: 19.99,
  description: "6x330ml bottles"
  }),
  new Product({
  id: "smoothest stout 6x330ml bottles",
  imagePath: "/images/mountain.png",
  name: "smoothest stout",
  type: "stout",
  price: 19.99,
  description: "6x330ml bottles"
  }),
  new Product({
  id: "the best pilsner 12x330ml bottles",
  imagePath: "/images/beach.png",
  name: "the best pilsner",
  type: "pilsner",
  price: 36.99,
  description: "12x330ml bottles"
  }),
  new Product({
  id: "bitter IPA 12x330ml bottles",
  imagePath: "/images/mountains.png",
  name: "bitter IPA",
  type: "IPA",
  price: 36.99,
  description: "12x330ml bottles"
  }),
  new Product({
  id: "smoothest stout 12x330ml bottles",
  imagePath: "/images/mountain.png",
  name: "smoothest stout",
  type: "stout",
  price: 36.99,
  description: "12x330ml bottles"
  }),
  new Product({
  id: "white IPA 6x440ml cans",
  imagePath: "/images/snow.png",
  name: "i'm peaking",
  type: "white IPA",
  price: 29.99,
  description: "6x440ml cans"
  }),
  new Product({
  id: "nature's burn 1x500ml bottles",
  imagePath: "/images/chili.png",
  name: "nature's burn",
  type: "session IPA",
  price: 8.99,
  description: "1x500ml bottle"
  }),
];

let count = 0;

for(let i=0; i < products.length; i++) {
  products[i].save( (err, res) => {
    count++;
    if (count === products.length) mongoose.disconnect;
  })
};
