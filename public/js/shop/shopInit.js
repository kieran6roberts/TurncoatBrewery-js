import updatePrice from "./updatePrice.js";
import quantityChangeHandler from "./quantityChangeHandler.js";
import addToCartHandler from "./addItemToCartHandler.js";
import removeCartItemHandler from "./removeCartItemHandler.js";
import checkoutHandler from "./checkoutHandler.js";
import { checkoutBtn } from "./removeItemOverlay.js";
import createCartItem from "./createCartItem.js";
import appendItemToCart from "./appendItemToCart.js";

const deleteBtns = document.querySelectorAll(".btn--danger-js");
const addToCartBtns = document.querySelectorAll(".shop__item-btn-js");
const quantityEls = document.querySelectorAll(".shop__item-quantity");
const cartContainer = document.querySelector(".shop__cart");

const shopInit = () => {
  const storedItems = JSON.parse(localStorage.getItem("CartItems"));
  const counter = document.querySelector(".cart-counter-js");
  counter.textContent =  JSON.parse(localStorage.getItem("CartCount")) || 0;

  if (storedItems) {
    storedItems.forEach( item => {
      const { image, title, type, info, price, id } = item;
      const cartEl = createCartItem( image, title, type, info, price, id);
      appendItemToCart(cartEl, cartContainer, ".shop__item-btn" , ".shop__item-quantity");
    });
  }
  
  updatePrice();
  
  quantityEls.forEach( el => {
    el.addEventListener("change", quantityChangeHandler);
  });
  
  addToCartBtns.forEach( btn => {
    btn.addEventListener("click", addToCartHandler);
  });
  
  deleteBtns.forEach( btn => {
    btn.addEventListener("click", removeCartItemHandler)
  });
  
  checkoutBtn.addEventListener("click", checkoutHandler);
};

export default shopInit;


