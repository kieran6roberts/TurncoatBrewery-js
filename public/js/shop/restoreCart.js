import appendItemToCart from "../shop/appendItemToCart.js";
import createCartItem from "../shop/createCartItem.js";

const restoreCart = () => {
  const shopItems = document.querySelectorAll(".shop__item");
  const cartContainer = document.querySelector(".shop__cart");
  const storedItems = JSON.parse(localStorage.getItem("CartItems"));
  const counter = document.querySelector(".cart-counter-js");
  counter.textContent =  JSON.parse(localStorage.getItem("CartCount")) || 0;

  if (storedItems) {
    const storedIds = storedItems.map( item => item.id);
    storedItems.forEach( item => {
      const { image, title, type, info, price, id } = item;
      const cartEl = createCartItem( image, title, type, info, price, id);
      appendItemToCart(cartEl, cartContainer, ".shop__item-btn" , ".shop__item-quantity");
    });

    [...shopItems].forEach( item => {
      // add overlay to item if it is already in the cart
      if (storedIds.includes(item.id)) item.firstElementChild.classList.add("added");
    });
  }
};

export default restoreCart;