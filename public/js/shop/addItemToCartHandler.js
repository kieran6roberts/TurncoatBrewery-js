import createCartItem from "./createCartItem.js";
import updatePrice from "./updatePrice.js";

// trigger the add to cart event
const addToCartHandler = e => {
  const clickedBtn = e.currentTarget;
  const clickedItem = clickedBtn.parentElement;
  const overlay = clickedItem.querySelector(".shop__item-overlay");
  overlay.classList.add("added");

  const image = clickedItem.querySelector(".shop__item--img").src;
  const title = clickedItem.querySelector(".shop__item-name").textContent;
  const type = clickedItem.querySelector(".shop__item-type").textContent;
  const info = clickedItem.querySelector(".shop__item-info").textContent;
  const price = clickedItem.querySelector(".shop__item-price").textContent;

  createCartItem( image, title, type, info, price);
  updatePrice();
};

export default addToCartHandler;