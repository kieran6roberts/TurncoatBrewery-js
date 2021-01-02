const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {type:String, required: true},
  imagePath: {type: String, required: true},
  name: {type: String, required: true},
  type: {type: String, required: true},
  price: {type: Number, required: true},
  description: {type: String, required: true}
});

const model = mongoose.model("Product", productSchema);

module.exports = model;