import updatePrice from "./updatePrice.js";
import quantityChangeHandler from "./quantityChangeHandler.js";
import addToCartHandler from "./addItemToCartHandler.js";
import removeCartItemHandler from "./removeCartItemHandler.js";
import checkoutHandler from "./checkoutHandler.js";
import { checkoutBtn } from "./removeItemOverlay.js";

const deleteBtns = document.querySelectorAll(".btn--danger-js");
const addToCartBtns = document.querySelectorAll(".shop__item-btn-js");
const quantityEls = document.querySelectorAll(".shop__item-quantity");

const shopInit = () => {
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


