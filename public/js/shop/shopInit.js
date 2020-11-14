import updatePrice from "./updatePrice.js";
import quantityChangeHandler from "./quantityChangeHandler.js";
import addToCartHandler from "./addItemToCartHandler.js";
import removeCartItemHandler from "./removeCartItemHandler.js";
import checkoutHandler from "./checkoutHandler.js";
import restoreCart from "./restoreCart.js";

const shopInit = () => {
  const deleteBtns = document.querySelectorAll(".btn--danger-js");
  const addToCartBtns = document.querySelectorAll(".shop__item-btn-js");
  const quantityEls = document.querySelectorAll(".shop__item-quantity");
  const checkoutBtn = document.querySelector(".shop__cart-checkout");
  restoreCart();
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


