import mongoose from "mongoose";
import dotenv from "dotenv";
import model from "../models/product.js";
dotenv.config();

mongoose.connect(process.env.DATABASE__URL,  
{
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const Product = model;

const products = [
  new Product({
  imagePath: "/images/beach.png",
  name: "the best pilsner",
  type: "pilsner",
  price: 19.99,
  description: "6x 330ml bottles"
  }),
  new Product({
  imagePath: "/images/mountains.png",
  name: "bitter IPA",
  type: "IPA",
  price: 19.99,
  description: "6x 330ml bottles"
  }),
  new Product({
  imagePath: "/images/mountain.png",
  name: "smoothest stout",
  type: "stout",
  price: 19.99,
  description: "6x 330ml bottles"
  }),
  new Product({
  imagePath: "/images/beach.png",
  name: "the best pilsner",
  type: "pilsner",
  price: 36.99,
  description: "12x 330ml bottles"
  }),
  new Product({
  imagePath: "/images/mountains.png",
  name: "bitter IPA",
  type: "IPA",
  price: 36.99,
  description: "12x 330ml bottles"
  }),
  new Product({
  imagePath: "/images/mountain.png",
  name: "smoothest stout",
  type: "stout",
  price: 36.99,
  description: "12x 330ml bottles"
  }),
  new Product({
  imagePath: "/images/snow.png",
  name: "i'm peaking",
  type: "white IPA",
  price: 29.99,
  description: "6x 440ml bottles"
  }),
  new Product({
  imagePath: "/images/chili.png",
  name: "nature's burn",
  type: "session IPA",
  price: 8.99,
  description: "1x 500ml bottle"
  }),
];

let count = 0;

for(let i=0; i < products.length; i++) {
  products[i].save( (err, res) => {
    count++;
    if (count === products.length) mongoose.disconnect;
  })
};
